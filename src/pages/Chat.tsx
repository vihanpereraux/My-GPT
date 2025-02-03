import React, { useState } from "react";

// MUI components
import { Box } from "@mui/material";

// components
import InputField from "../components/InputField";

// props
import { ChatProps } from "../interfaces/Props";

const Chat: React.FC = () => {
    const [data, setData] = useState<ChatProps[]>([])

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
                }}>
                    {data?.map((item, index) => (
                        <Box sx={{
                            backgroundColor: '#242424',
                            pt: 1.7,
                            pb: .2,
                            pl: 2,
                            pr: 2,
                            mt: 2,
                            borderRadius: 2.5,
                            width: 'fit-content'
                            
                        }} key={index}>
                            <span style={{
                                color: 'orangered',
                                textTransform: 'capitalize',
                                fontSize: 15,
                                fontWeight: 500,
                                opacity: .75
                            }}>{item.role === 'user' ? "me" : item.role}</span>

                            <pre style={{
                                color: 'white',
                                fontFamily: 'Inter',
                                marginTop: 7,
                                fontSize: 16,
                                whiteSpace: 'pre-wrap',
                                lineHeight: 1.5
                            }}>{item.content}</pre>
                        </Box>
                    ))}
                </Box>

                {/* input */}
                <Box sx={{
                    height: 'calc((100vh - 45px) * .1)',
                }}>
                    <InputField sendData={setData} />
                </Box>
            </Box>
        </>
    )
}

export default Chat