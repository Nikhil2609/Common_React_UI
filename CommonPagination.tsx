import React, { } from "react";
import { Box, styled, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handleChangePage: Function;
    startIndex: number;
    endIndex: number;
    totalResults: number;
}

const StyledPagination = (props: PaginationProps) => {
    const { currentPage, totalPages, handleChangePage, startIndex, endIndex, totalResults } = props;
    return (
        <>
            <PageWrapper>
                <Box flexGrow={1} />
                <Pagination
                    data-test-id="table-pagination"
                    count={totalPages}
                    page={currentPage}
                    onChange={(event: React.ChangeEvent<unknown>, page: number) => handleChangePage(event, page)}
                />
                <Box flexGrow={1} textAlign="right" className="pagination-details">
                    <Typography variant="body2">{`${startIndex} - ${endIndex} of ${totalResults} results`}</Typography>
                </Box>
            </PageWrapper>
        </>
    );
}

const PageWrapper = styled(Box)({
    display: "flex",
    padding: "16px",
    //on hover display highlighted
    "& .MuiPaginationItem-page:hover": {
        color: "#684EF3",
        fontWeight: 700,
    },
    //on active page display highlighted
    "& .MuiPaginationItem-page.Mui-selected": {
        color: "#684EF3",
        backgroundColor: "white",
        fontWeight: 700,
    },
    "& .pagination-details": {
    paddingRight: "16px",
    color: "#5E6671",
    fontSize: "12px",
    fontWeight: 400
  },
})

export default StyledPagination;
