import React, {
    useEffect,
    useState,
} from "react";

// icons
import SendIcon from '@mui/icons-material/Send';

// MUI components
import { Box } from "@mui/material";
import { Button } from "@mui/material";

// configs
import { getQuickResponse } from "../config/GroqConfig";

// props
import { ChatProps } from "../interfaces/Props";

interface InputFieldProps {
    sendData: (value: ChatProps[]) => void
}

// temp store
const messages: ChatProps[] = [];

const InputField: React.FC<InputFieldProps> = ({ sendData }) => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [value, setValue] = useState<string>("")

    // initial fetch
    useEffect(() => { sendData([...messages]); }, [])

    const handleUserInput
        = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        }

    const getResponse = async () => {
        setButtonDisabled(true);
        messages.push({ role: 'user', content: value });
        sendData([...messages]);
        const response = await getQuickResponse(value);
        // input reset
        setValue('');
        messages.push({ role: 'assistant', content: response as string });
        // state update
        sendData([...messages]);
        setButtonDisabled(false);
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
                        // border: '1px solid red',
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

                <Button
                    sx={{
                        width: '8%',
                        height: 65,
                        backgroundColor: 'black',
                        color: 'black',
                        borderRadius: 2.2,
                        textTransform: 'capitalize',
                        ml: 2
                    }}
                    disabled={buttonDisabled}
                    onClick={getResponse}
                    variant="contained">
                    <SendIcon sx={{ color: 'white' }} />
                </Button>
            </Box>
        </>
    )
}

export default InputField