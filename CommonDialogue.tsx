import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  CircularProgress
} from "@material-ui/core";
import CommonButton from "./CommonButton.web";

interface DialgoueProps {
  open: boolean;
  title: string;
  body: React.ReactNode | string;
  submitBtnText: string;
  cancelBtnText?: string;
  handleCancel: Function;
  handleSubmit: Function;
  isLoading?: boolean;
}

const CommonDialogue = (props: DialgoueProps) => {
  const {
    open,
    title,
    body,
    submitBtnText,
    cancelBtnText,
    handleSubmit,
    handleCancel,
    isLoading
  } = props;
  return (
    <>
      <StyledDialogue
        data-test-id="dialogue"
        maxWidth={"xs"}
        open={open}
        onClose={() => handleCancel()}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{body}</DialogContent>
        <DialogActions>
          {cancelBtnText && (
            <Button
              onClick={() => handleCancel()}
              variant="outlined"
              className="cancelBtn"
            >
              {cancelBtnText}
            </Button>
          )}
          <CommonButton
            onClick={() => handleSubmit()}
            variant="primary"
            className="submitBtn"
            isLoading={isLoading} 
            label={submitBtnText}
            dataTestId={"commonDialogSubmitBtn"}
          />
        </DialogActions>
      </StyledDialogue>
    </>
  );
};

const StyledDialogue = styled(Dialog)({
  "& .MuiPaper-rounded": {
    borderRadius: "32px"
  },
  "& .MuiDialogTitle-root": {
    borderBottom: "1px solid #E2E8F0",
  },
  "& .MuiDialogContent-root": {
    backgroundColor: "white",
  },
  "& .MuiDialogActions-root": {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px"
  },
  "& .MuiButton-root": {
    padding: "10px 16px",
    textTransform: "none",
    width: "100%",
  },
  "& .cancelBtn": {
    color: "#684EF3",
    backgroundColor: "#FFFFFF",
    border: "1px solid #684EF3",
  },
  "& .submitBtn": {
    color: "#FFFFFF",
    backgroundColor: "684EF3",
  },
});

export default CommonDialogue;


// use of common dialogue
<CommonDialogue 
    open={this.state.openHelpSupportDialogue} 
    title={"Help & support"} 
    body={
        <Typography style={{fontWeight: 400, fontSize: "16px", fontFamily: "DM Sans"}}>
            <Typography style={{paddingBottom: "16px"}}> If you have any questions or run into issues, our support team is ready to assist you.</Typography>
            You can reach us at <span style={{fontWeight: 700, fontSize: "16px"}}>support@yourapp.com</span>  for any inquiries or assistance. We typically respond within 24 hours.
        </Typography>
    } 
    submitBtnText={"Got it!"} 
    handleCancel={this.toggleHelpSupportDialogue} 
    handleSubmit={this.toggleHelpSupportDialogue}                    
/>

toggleHelpSupportDialogue = () => {
    this.setState({
        openHelpSupportDialogue: !this.state.openHelpSupportDialogue, 
    });
};
