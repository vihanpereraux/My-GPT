import React, { useState } from "react";

// MUI components
import { Box } from "@mui/material";

// components
import InputField from "../components/InputField";
import Bubble from "../components/Buble";

// props
import { ChatProps } from "../interfaces/Props";

const Chat: React.FC = () => {
    const [data, setData] = useState<any[]>([])

    return (
        <>
            {/* base layout */}
            <Box sx={{
                height: 'calc(100vh - 45px)',
                pl: 2,
                pr: 2,
            }}>
                {/* bubbles */}
                <div
                    className="_bubbles_wrapper"
                    ref={(el) => {
                        if (el) {
                            el.scrollTop = el.scrollHeight;
                        }
                    }}
                    style={{
                        height: 'calc((100vh - 45px) * .9)',
                        overflow: 'auto',
                    }}>
                    {data?.map((item, index) => (
                        item.role === "system" ?
                            null
                            :
                            (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent:
                                            item.role === 'user' ?
                                                "flex-end"
                                                :
                                                "flex-start",
                                    }}>
                                    {typeof item.content === "object" ?
                                        (
                                            <Box style={{
                                                border: 'none',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                alignItems: 'flex-end'
                                            }}>
                                                <img
                                                    style={{ width: '25%', borderRadius: 10 }}
                                                    src={item.content[1].image_url.url} alt="" />

                                                <Bubble
                                                    role={item.role}
                                                    content={item.content[0].text} />
                                            </Box>
                                        )
                                        :
                                        (
                                            <Bubble
                                                role={item.role}
                                                content={item.content} />
                                        )}

                                </Box>
                            )

                    ))}
                </div>

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