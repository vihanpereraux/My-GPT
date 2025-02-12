import React, { useState } from "react";

// MUI components
import { Box } from "@mui/material";

// components
import InputField from "../components/InputField";
import Bubble from "../components/Buble";

// props
import { ChatProps } from "../interfaces/Props";

const Chat: React.FC = () => {
    const [data, setData] = useState<ChatProps[]>([])

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
                        <Box key={index} sx={{
                            display: 'flex',
                            justifyContent:
                                item.role === 'user' ?
                                    "flex-end"
                                    :
                                    "flex-start",
                        }}>
                            <Bubble
                                role={item.role}
                                content={item.content} />
                        </Box>
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