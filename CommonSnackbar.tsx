import React from "react";
import { IconButton, Portal, Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { colors } from "../../../blocks/utilities/src/Colors";

interface Props {
  open: boolean;
  handleClose: () => void;
  message: string;
  severity?: "success" | "error" | "warning";
}

const CommonSnackbar = (props: Props) => {
  const { open, handleClose, message, severity = "success" } = props;

  const renderBgColor = () => {
    if (severity === "success") {
      return colors().success;
    } else if (severity === "error") {
      return colors().error;
    } else {
      return colors().warning;
    }
  };

  return (
    <Portal>
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      key={"top" + "center"}
      autoHideDuration={1400}
    >
      <SnackbarContent
        message={message}
        style={{ backgroundColor: renderBgColor(), borderRadius: "8px" }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
    </Portal>
  );
};

export default CommonSnackbar;


// How to use
<CommonSnackbar
    open={this.state.isSnackbarOpen}
    message={this.state.snackbarContent}
    handleClose={this.handleClose}
    severity={this.state.snackbarErrorSeverity ? "error" : "success"}
/>

handleClose = () => this.setState({ isSnackbarOpen: false, snackbarContent: "" })
        
