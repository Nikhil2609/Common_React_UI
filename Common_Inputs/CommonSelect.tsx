import React, { Component } from "react";
import { Field, FieldProps } from "formik";
import {
  FormControl,
  MenuItem,
  Select,
  SelectProps,
  Box,
  Typography,
  styled,
  FormHelperText,
} from "@material-ui/core";
import { colors } from "../../../blocks/utilities/src/Colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type CustomSelectProps = SelectProps & {
  label?: string;
  name: string;
  options: { value: string | number; label: string }[];
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => void;
  formik?: boolean;
};

class CustomSelect extends Component<CustomSelectProps> {
  render() {
    const {
      label,
      name,
      options,
      value,
      className,
      variant = "outlined",
      onChange,
      formik,
      ...props
    } = this.props;

    if (formik) {
      return (
        <Field name={name}>
          {({ field, meta }: FieldProps) => (
            <SelectStyleWrapper className={className}>
              {label && <Typography className="label">{label}</Typography>}
              <FormControl
                error={Boolean(meta.touched && meta.error)}
                fullWidth
              >
                <Select
                  {...field}
                  {...props}
                  onChange={onChange || field.onChange}
                  variant={variant}
                  className="custom-select"
                  IconComponent={ExpandMoreIcon}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        marginTop: "52px",
                        borderRadius: "8px",
                        border: "solid 1px #E2E8F0",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      },
                    },
                    MenuListProps: {
                      style: {
                        padding: 0,
                      },
                    },
                  }}
                >
                  {options.map((option) => (
                    <StyledMenuItem
                      key={option.value}
                      value={option.value}
                      className="menu__item"
                    >
                      {option.label}
                    </StyledMenuItem>
                  ))}
                </Select>
                {meta.touched && meta.error && (
                  <FormHelperText>{meta.error}</FormHelperText>
                )}
              </FormControl>
            </SelectStyleWrapper>
          )}
        </Field>
      );
    }

    return (
      <SelectStyleWrapper className={className}>
        {label && <Typography className="label">{label}</Typography>}
        <FormControl fullWidth>
          <Select
            {...props}
            name={name}
            value={value}
            className="custom-select"
            variant={variant}
            onChange={onChange}
            IconComponent={ExpandMoreIcon}
            MenuProps={{
              PaperProps: {
                style: {
                  marginTop: "52px",
                  borderRadius: "8px",
                  border: "solid 1px #E2E8F0",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  ...(props.MenuProps?.PaperProps?.style || {}),
                },
              },
              MenuListProps: {
                style: {
                  padding: 0,
                  ...(props.MenuProps?.MenuListProps?.style || {}),
                },
              },
              ...props.MenuProps,
            }}
          >
            {options.map((option) => (
              <StyledMenuItem key={option.value} value={option.value}>
                {option.label}
              </StyledMenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectStyleWrapper>
    );
  }
}

const SelectStyleWrapper = styled(Box)({
  "& .label": {
    fontWeight: 700,
    lineHeight: "21px",
    fontSize: "14px",
    color: colors().darkText,
    marginBottom: "4px",
  },
  "& .MuiFormControl-root": {
    minHeight: "64px",
  },
  "& .custom-select": {
    borderRadius: "8px",
    backgroundColor: "#FFF",
    overflow: "hidden",
    "& .MuiSelect-select": {
      padding: "12px 44px 12px 12px",
      color: colors().darkText,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .MuiSvgIcon-root": {
      color: colors().darkText,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#FFF",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors().tableBorder,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: colors().tableBorder,
    },
    "& .MuiSelect-iconOutlined": {
      right: "12px",
    },
  },
  "& .MuiFormHelperText-root": {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    marginLeft: "0",
    marginTop: "0",
    color: "#d32f2f",
  },
});

const StyledMenuItem = styled(MenuItem)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
  color: colors().darkText,
  padding: "12px 16px",
});

export default CustomSelect;
 

// use of custom select
<CustomSelect
  name="selection"
  options={[
    { label: "Actions", value: "actions" },
    { label: "Queries", value: "queries" },
  ]}
  value={actions}
  onChange={this.handleHistoryDropdown}
/>

handleHistoryDropdown = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
  this.setState({
    historyDropdown: event.target.value as string,
  })
}
