import React, {
    useEffect,
    useState,
    useRef
} from "react";

// icons
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';

// MUI components
import { Box } from "@mui/material";
import { Button } from "@mui/material";

// configs
import { getQuickResponse } from "../config/GroqConfig";

// service
import { uploadImage } from "../services/Cloudinary";

// props
import { ChatProps } from "../interfaces/Props";

interface InputFieldProps {
    sendData: (value: ChatProps[]) => void
}

// temp store
const messages: any[] = [
    // {
    //     role: "system",
    //     content: "You are a helpful AI assitant."
    // }
];

const InputField: React.FC<InputFieldProps> = ({ sendData }) => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [value, setValue] = useState<string>("")
    const [attachment, setAttachment] = useState<any>(null);
    // const [imageURL, setImageURL] = useState<string>("");

    // initial fetch
    useEffect(() => { sendData([...messages]); }, [])

    const handleUserInput
        = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        }

    const getResponse = async () => {
        setButtonDisabled(true);
        // snapshot
        const inputValueSnapshot = value;
        // input reset
        setValue('');

        if (attachment) {
            // image upload 2 the cloudinary
            const response = await uploadImage(attachment); 

            messages.push({
                role: 'user',
                content: [
                    {
                        "type": "text",
                        "text": inputValueSnapshot
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": response.secure_url
                        }
                    }
                ]
            });
            // attachemnt state reset
            setAttachment(null);
        } else {
            messages.push({ role: 'user', content: inputValueSnapshot });
        }

        // state update
        sendData([...messages]);

        const response = await getQuickResponse(messages);
        // messages.push({ role: 'assistant', content: response as string });

        // state update
        if (response) { 
            console.log(response);
            sendData([...response]);
            setButtonDisabled(false);
        }
    }

    const inputFile = useRef<HTMLInputElement>(null);
    const handleImageUpload = () => {
        if (inputFile) {
            inputFile.current?.click();
        }
    }

    const detectAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('file attached');
        if (e.target.files) {
            setAttachment(e.target.files[0]);
            console.log(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <>
            <Box sx={{
                height: '10vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <input
                    type="text"
                    style={{
                        width: '90%',
                        border: 'none',
                        height: 50,
                        backgroundColor: 'rgb(33, 33, 33)',
                        borderRadius: 8,
                        color: 'white',
                        fontSize: 16,
                        paddingLeft: 2,
                        paddingRight: 2,
                    }}
                    value={value}
                    onChange={handleUserInput}
                    placeholder="Type your message here"></input>

                <input ref={inputFile} onChange={detectAttachment} style={{ display: 'none' }} type="file" />
                <Button
                    onClick={handleImageUpload}
                    sx={{
                        width: '6%',
                        height: 60
                    }}>
                    <ImageIcon sx={{ color: 'white' }} />
                </Button>

                <Button
                    sx={{
                        width: '5%',
                        height: 65,
                        backgroundColor: 'red',
                        color: 'black',
                        borderRadius: 2.2,
                        textTransform: 'capitalize',
                        ml: 2
                    }}
                    disabled={buttonDisabled}
                    onClick={getResponse}
                    variant="contained">

                    {/* send button */}
                    <SendIcon sx={{ color: 'white' }} />
                </Button>
            </Box>
        </>
    )
}

export default InputField