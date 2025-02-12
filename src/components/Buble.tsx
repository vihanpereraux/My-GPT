import React from "react";

// MUI components
import { Box } from "@mui/material";

// props
import { BubbleProps } from "../interfaces/Props";

const Bubble: React.FC<BubbleProps> = ({
    role, content }) => {
    return (
        <>
            <Box sx={{
                backgroundColor: '#242424',
                pt: 1,
                pb: 0,
                pl: 2,
                pr: 2,
                mt: 2,
                borderRadius: 2.5,
                width: 'fit-content',
                maxWidth: '83%'
            }}>
                <span style={{
                    color: 'orangered',
                    textTransform: 'capitalize',
                    fontSize: 15,
                    fontWeight: 500,
                    opacity: .75
                }}>{role === 'user' ? "" : role}</span>

                <pre style={{
                    color: 'white',
                    fontFamily: 'Inter',
                    marginTop: 7,
                    fontSize: 16,
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.5
                }}>{content}</pre>
            </Box>
        </>
    )
}

export default Bubble;