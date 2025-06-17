// common table with pagination
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Menu,
    Pagination,
    Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface Column {
    header: string;
    render: (row) => React.ReactNode;
}

interface TableProps {
    columns: Column[];
    data: Record<string, any>[];
    renderActionMenu?: (row: Record<string, any>, closeMenu: () => void) => React.ReactNode;
    // currentPage: number;
    totalRows: number;
    onPageChange: (newPage: number) => void;
}

const rowsPerPage = 10;
export const CommonTable: React.FC<TableProps> = (props: TableProps) => {

    const { columns, data, renderActionMenu, totalRows, onPageChange } = props;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuRowIndex, setMenuRowIndex] = useState<number | null>(null);
    const [page, setPage] = React.useState(1);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setAnchorEl(event.currentTarget);
        setMenuRowIndex(index);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuRowIndex(null);
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        onPageChange(value) // api call for next page
    };

    return (
        <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 3 }}>
            <Table>
                <TableHead >
                    <TableRow sx={{ backgroundColor: "#3730a3 !important" }}>
                        {columns.map((col, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    color: 'white',
                                    fontWeight: 400,
                                    py: 1.5,
                                    textAlign: "center"
                                }}
                            >
                                {col.header}
                            </TableCell>
                        ))}
                        {renderActionMenu && (
                            <TableCell
                                sx={{
                                    color: 'white',
                                    fontWeight: 400,
                                    py: 1.5,
                                    textAlign: "center"
                                }}
                            >
                                Actions
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={columns.length + 1} align="center">
                                No records found.
                            </TableCell>
                        </TableRow>
                    )}
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex} hover>
                            {columns.map((col, index) => (
                                <TableCell key={index} sx={{ py: 1.5, textAlign: "center" }}>
                                    {col.render(row)}
                                </TableCell>
                            ))}
                            {renderActionMenu && (
                                <TableCell sx={{ py: 1.5, textAlign: "center" }}>
                                    <IconButton onClick={(e) => handleMenuOpen(e, rowIndex)}>
                                        <MoreVertIcon sx={{ color: '#3730a3' }} />
                                    </IconButton>
                                    {menuRowIndex === rowIndex && (
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleMenuClose}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                        >
                                            {renderActionMenu(row, handleMenuClose)}
                                        </Menu>
                                    )}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* pagination */}
            <Stack direction="row" justifyContent="center" m={3}>
                <Pagination
                    count={Math.ceil(totalRows / rowsPerPage)}
                    page={page}
                    onChange={(_, value) => handleChange(_, value)}
                    variant="outlined"
                    shape="rounded"
                    sx={{
                        "& .Mui-selected": {
                            backgroundColor: "#3730a3 !important", // Tailwind's indigo-800
                            color: "#fff !important",
                            borderColor: "#3730a3 !important",
                        },
                    }}
                />
            </Stack>
        </TableContainer>
    );
};


// use of comon table
import { CommonTable } from "@/components/common/CommonTable";
import { MenuItem } from "@mui/material";

type User = {
  id: number;
  user: {
    name: string;
  }
  email: string;
  status: string;
};

const columns = [
  {
    header: "Name",
    render: (row) => row.user.name
  },
  {
    header: "Email",
    render: (row) => row.email
  },
  {
    header: "Status",
    render: (row) => row.status
  },
  {
    header: "Delete",
    render: (row) => "Delete Button"
  },
];

const users: User[] = [
  { id: 1, user: { name: "Alice" }, email: "alice@example.com", status: "Active" },
  { id: 2, user: { name: "Bob" }, email: "bob@example.com", status: "Inactive" },
  { id: 1, user: { name: "Alice" }, email: "alice@example.com", status: "Active" },
  { id: 2, user: { name: "Bob" }, email: "bob@example.com", status: "Inactive" },
  { id: 1, user: { name: "Alice" }, email: "alice@example.com", status: "Active" },
  { id: 2, user: { name: "Bob" }, email: "bob@example.com", status: "Inactive" },
  { id: 1, user: { name: "Alice" }, email: "alice@example.com", status: "Active" },
  { id: 2, user: { name: "Bob" }, email: "bob@example.com", status: "Inactive" },
  { id: 1, user: { name: "Alice" }, email: "alice@example.com", status: "Active" },
  { id: 2, user: { name: "Bob" }, email: "bob@example.com", status: "Inactive" },
];


export default function Home() {
  const handleAction = (type: string, row: any) => {
    alert(`${type} clicked for ${row.name}`);
  };

  const renderActionMenu = (row, closeMenu) => (
    <>
      <MenuItem
        onClick={() => { handleAction("View", row); closeMenu(); }}
      >
        View
      </MenuItem>
      <MenuItem
        onClick={() => { handleAction("Edit", row); closeMenu(); }}
      >
        Edit
      </MenuItem>
      <MenuItem
        onClick={() => { handleAction("Delete", row); closeMenu(); }}
        sx={{ color: "red" }}
      >
        Delete
      </MenuItem>
    </>
  )

  return (
      <div className="p-10">
        <CommonTable
          columns={columns}
          data={users}
          totalRows={100}
          onPageChange={(pageNumber) => console.log(pageNumber)} // call page number API
          renderActionMenu={renderActionMenu}
        />

      </div>
  );
}

