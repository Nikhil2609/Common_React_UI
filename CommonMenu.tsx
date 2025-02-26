import React from "react";
import { Menu,MenuItem, styled } from "@material-ui/core";

interface MenuProps {
    anchorEl: any;
    handleMenuClose: Function;
}

// more icon 
// <MoreVertIcon onClick={(event) => this.handleMenuOpen(event, row[0])} />

// function for open menu
// handleMenuOpen = (event: React.ChangeEvent<unknown>, row: string) => {
//     this.setState({ anchorEl: event.currentTarget, selectedRow: row });
//   };
  
// handleMenuClose = () => {
//     this.setState({ anchorEl: null, selectedRow: null });
// };

const CommonStyledMenu = (props: MenuProps) => {
    const { currentPage, totalPages, handleChangePage, startIndex, endIndex, totalResults } = props;
    return (
        <>
            <StyledMenu 
                data-test-id={`action-menu`} 
                anchorEl={props.anchorEl} 
                keepMounted 
                elevation={0}
                anchorOrigin={{ vertical: "bottom" , horizontal: "right" , }} 
                transformOrigin={{ vertical: "top" , horizontal: "right" }} 
                getContentAnchorEl={null} 
                open={Boolean(props.anchorEl)} 
                onClose={props.handleMenuClose}
            >
            <MenuItem>View</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
        </StyledMenu>
        </>
    );
}

const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
      border: "1px solid #E2E8F0",
      boxShadow: "0px 4px 6px -2px #684EF333",
    },
    '& .MuiMenuItem-root': {
      display: "flex",
      alignItems: "center",
      padding: "9px 20px",
      color: "#30353B",
      fontSize: "14px",
      fontWeight: 400
    }
  })

export default CommonStyledMenu;
