import React from "react";

// icons
import SendIcon from '@mui/icons-material/Send';

// MUI components
import { Box, Input } from "@mui/material";
import { Button } from "@mui/material";

const InputField: React.FC = () => {
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
                        fontSize: 18,
                        pl: 2,
                        pr: 2
                    }}
                    placeholder="Type your message"></Input>

                <Button
                    sx={{
                        width: '10%',
                        height: 65,
                        backgroundColor: 'black',
                        color: 'black',
                        borderRadius: 2.2,
                        textTransform: 'capitalize',
                    }}
                    variant="contained">
                    <SendIcon sx={{ color: 'white' }} />
                </Button>
            </Box>
        </>
    )
}

export default InputField