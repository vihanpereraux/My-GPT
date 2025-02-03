import React from "react";
import { useNavigate } from "react-router-dom";

// MUI components
import { Button as Selection } from "@mui/material";

// props
import { SelectionButtonProps } from "../interfaces/Props";

const Button: React.FC<SelectionButtonProps> = ({ title }) => {
    const navigate = useNavigate();

    const handleDirection = () => {
        if (title === 'Quick Chat') {
            navigate('/chat');
        } else {
            navigate('/chat');
        }
    }

    return (
        <>
            <Selection
                onClick={handleDirection}
                sx={{
                    pl: 5,
                    pr: 5,
                    pt: 2,
                    pb: 2,
                    fontSize: 20,
                    textTransform: 'capitalize',
                    color: 'white',
                    m: 1.5,
                    backgroundColor: 'rgb(25, 25, 25)',
                    borderRadius: 2
                }}>{title}</Selection>
        </>
    )
}

export default Button