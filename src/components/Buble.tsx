import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

                {role === 'user' ? (
                    <pre style={{
                        color: 'white',
                        fontFamily: 'Inter',
                        marginTop: 7,
                        fontSize: 16,
                        whiteSpace: 'pre-wrap',
                        lineHeight: 1.5
                    }}>{content}</pre>
                ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                )}
                
            </Box>
        </>
    )
}

export default Bubble;