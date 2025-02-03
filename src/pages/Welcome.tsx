import React from "react";

// components
import { Box } from "@mui/material";
import Button from "../components/Button";

const Welcome: React.FC = () => {
    return (
        <>
            {/* layout */}
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                width: '100vw',
                height: 'calc(100vh - 45px)',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button title={"Quick Chat"}></Button>
                <Button title={"Conversations"}></Button>
            </Box>
        </>
    )
}

export default Welcome