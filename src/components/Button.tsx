import React from "react";

// MUI components
import { Button as Selection } from "@mui/material";

// props
import { SelectionButtonProps } from "../interfaces/Props";

const Button: React.FC<SelectionButtonProps> = ({ title }) => {
    return (
        <>
            <Selection
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