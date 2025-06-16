// functional component Textfield + password

import {
    Box,
    TextField,
    TextFieldProps,
    Typography,
    IconButton,
    InputAdornment
} from '@mui/material';
import { Field, FieldProps } from 'formik';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type CustomInputProps = TextFieldProps & {
    label?: string;
    name: string;
};

const MUITextField: React.FC<CustomInputProps> = ({
    name,
    label,
    type,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordField = type === 'password';

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Field name={name}>
            {({ field, meta }: FieldProps) => (
                <Box mb={2}>
                    {label && <Typography mb={1}>{label}</Typography>}
                    <TextField
                        {...field}
                        {...props}
                        type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
                        name={name}
                        fullWidth
                        error={Boolean(meta.touched && meta.error)}
                        InputProps={{
                            endAdornment: isPasswordField && (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    {meta.touched && meta.error && (
                        <Typography color="error" variant="body2">
                            {meta.error as string}
                        </Typography>
                    )}
                </Box>
            )}
        </Field>
    );
};

export default MUITextField;







// Class component with formik + normal field

import React, { Component } from "react";
import { Field, FieldProps } from "formik";
import { TextField, TextFieldProps, Box, Typography, styled } from "@material-ui/core";
import { colors } from "../../../blocks/utilities/src/Colors";

type CustomInputProps = TextFieldProps & {
  label?: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formik?: boolean;
};

class CustomInput extends Component<CustomInputProps> {
  render() {
    const { label, name, value, variant = "outlined", onChange, formik, ...props } = this.props;

    if (formik) {
      return (
        <Field name={name}>
          {({ field, meta }: FieldProps) => (
            <InputStyleWrapper>
              {label && (
                <Typography variant="body1" className="label">
                  {label}
                </Typography>
              )}
              <TextField
                {...field}
                {...props}
                onChange={onChange || field.onChange}
                variant={variant}
                error={Boolean(meta.touched && meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ""}
              />
            </InputStyleWrapper>
          )}
        </Field>
      );
    }

    return (
      <InputStyleWrapper>
        {label && (
          <Typography variant="body1" className="label">
            {label}
          </Typography>
        )}
        <TextField {...props} name={name} value={value} variant={variant} onChange={onChange} />
      </InputStyleWrapper>
    );
  }
}

const InputStyleWrapper = styled(Box)({
  "& .label": {
    fontWeight: 700,
    lineHeight: "21px",
    fontSize: "14px",
    color: colors().darkText,
    marginBottom: "4px",
  },
  "& .MuiFormControl-root": {
    minHeight: "64px",
    width: "100%",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#FFF",
  },
  "& .MuiOutlinedInput-root:not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
    borderColor: colors().tableBorder,
  },
  "& .MuiInputBase-input": {
    color: colors().darkText,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    padding: "10px 12px",
    height: "unset",
  },
  "& .MuiFormHelperText-root": {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    marginLeft: "0",
    marginTop: "0",
  },
});

export default CustomInput;

// use normal custom input
<CustomInput
  name="searchMessage"
  fullWidth
  className="search__input"
  onChange={(e) =>{this.setState({search: e.tagret.value}}}
  InputProps={{
    startAdornment: (
      <InputAdornment position="end">
        <img src={searchIcon} />
      </InputAdornment>
    ),
  }}
/>

// use formik custom input
<CustomInput
    formik
    name="email"
    label="New email"
    placeholder="Enter new email"
/>
