import React from "react";

// MUI components
import { Box } from "@mui/material";

const TopBar: React.FC = () => {
    return (
        <>
            <Box sx={{
                textTransform: 'uppercase',
                // border: '1px solid red',
                height: 45,
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <span
                    style={{ color: 'white' }}>My GPT</span>
            </Box>
        </>
    )
}

export default TopBar