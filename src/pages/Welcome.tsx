import React from "react";

// MUI components
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

// components
import Button from "../components/Button";

const Welcome: React.FC = () => {
    return (
        <>
            {/* layout */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                height: 'calc(100vh - 45px)',
            }}>
                <Typography sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                }}>Select an option</Typography>

                {/* selections wrapper */}
                <Box sx={{
                    display: "flex",
                    width: '100vw',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 3
                }}>
                    <Button title={"Quick Chat"}></Button>
                    <Button title={"Conversations"}></Button>
                </Box>
            </Box>
        </>
    )
}

export default Welcome