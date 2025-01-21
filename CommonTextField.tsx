import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// Define the props for the common TextField component
interface CommonTextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
}

// Styled Material-UI TextField
const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "10px 0", // Add spacing between fields
  "& .MuiInputBase-root": {
    fontSize: "16px", // Default font size
  },
  "& .MuiFormLabel-root": {
    fontSize: "14px", // Label font size
  },
  "& .MuiInputBase-input": {
    padding: "10px", // Input padding
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiInputBase-root": {
      fontSize: "14px",
    },
    "& .MuiFormLabel-root": {
      fontSize: "12px",
    },
    "& .MuiInputBase-input": {
      padding: "8px",
    },
  },
}));

// CommonTextField Component
const CommonTextField: React.FC<CommonTextFieldProps> = ({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  error = false,
  helperText,
  disabled = false,
  required = false,
  fullWidth = false,
  size = "medium",
  variant = "outlined",
}) => {
  return (
    <StyledTextField
      label={label}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      error={error}
      helperText={helperText}
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
    />
  );
};

export default CommonTextField;
