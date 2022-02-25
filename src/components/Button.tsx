import React from "react";
import { Button as MaterialButton } from "@mui/material";
import Stack from "@mui/material/Stack";

interface IButtonProps {
    value: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
  }
  
  export const Button: React.FC<IButtonProps> = ({
    value = "",
    className = "",
    disabled = false,
    onClick = () => {},
  }) => {
    return (
      <Stack spacing={2} direction="row" onClick={disabled ? () => {} : onClick}>
        <MaterialButton
          variant="contained"
          disabled={disabled}
          className={className}
        >
          {value}
        </MaterialButton>
      </Stack>
    );
  };