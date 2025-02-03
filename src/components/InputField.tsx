import React, { useEffect, useState } from "react";

// icons
import SendIcon from '@mui/icons-material/Send';

// MUI components
import { Box, Input } from "@mui/material";
import { Button } from "@mui/material";

// configs
import { getQuickResponse } from "../config/GroqConfig";

// props\
import { ChatProps } from "../interfaces/Props";

interface InputFieldProps {
    sendData: (value: ChatProps []) => void
}

const messages: ChatProps[] = [];

const InputField: React.FC<InputFieldProps> = ({ sendData }) => {
    const [value, setValue] = useState<string>("")

    useEffect(() => {sendData([...messages]);}, [])

    const handleUserInput
        = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        }

    const getResponse = async () => {
        messages.push({ role: 'user', content: value });
        const response = await getQuickResponse(value);
        messages.push({ role: 'assistant', content: response as string });

        // console.log(response);

        sendData([...messages]);
    }

    return (
        <>
            <Box sx={{
                height: '10vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Input
                    type="text"
                    sx={{
                        // border: '1px solid red',
                        width: '90%',
                        border: 'none',
                        height: 65,
                        backgroundColor: 'rgb(25, 25, 25)',
                        borderRadius: 2.2,
                        color: 'white',
                        fontSize: 16,
                        pl: 2,
                        pr: 2
                    }}
                    value={value}
                    onChange={handleUserInput}
                    placeholder="Type your message here"></Input>

                <Button
                    sx={{
                        width: '10%',
                        height: 65,
                        backgroundColor: 'black',
                        color: 'black',
                        borderRadius: 2.2,
                        textTransform: 'capitalize',
                    }}
                    onClick={getResponse}
                    variant="contained">
                    <SendIcon sx={{ color: 'white' }} />
                </Button>
            </Box>
        </>
    )
}

export default InputField