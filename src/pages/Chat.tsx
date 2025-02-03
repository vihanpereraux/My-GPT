import React from "react";

// MUI components
import { Box } from "@mui/material";

// components
import InputField from "../components/InputField";

const Chat: React.FC = () => {
    return (
        <>
            {/* base layout */}
            <Box sx={{
                // border: '1px solid yellow',
                height: 'calc(100vh - 45px)',
                pl: 2,
                pr: 2,
            }}>
                {/* bubbles */}
                <Box sx={{
                    height: 'calc((100vh - 45px) * .9)',
                    overflow: 'auto',
                }}></Box>

                {/* input */}
                <Box sx={{
                    height: 'calc((100vh - 45px) * .1)',
                }}>
                    <InputField />
                </Box>
            </Box>
        </>
    )
}

export default Chat