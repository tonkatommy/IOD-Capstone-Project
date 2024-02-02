// import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useSelectionContext } from "../../context/SelectionContext";
import { useRowsContext } from "../../context/RowsContext";

const BasicColumnsGrid = (props) => {
    const { rowSelection, updateSelection } = useSelectionContext();
    // const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const { currentRows, setCurrentRows } = useRowsContext();
    console.log("rowSelection in component: ", rowSelection);
    // rowSelection ? props.func(rowSelection) : [];

    const handleDelete = (id) => {
        console.log("handleDelete: ", id);
        setCurrentRows((prevRows) => prevRows.filter((row) => row._id !== id));
    };

    console.log("gridProps: ", props);
    const columns = [
        { field: "_id", headerName: "ID#", width: 90 },
        {
            field: "title",
            headerName: "Title",
            type: "number",
            width: 50,
            editable: true,
        },
        {
            field: "firstName",
            headerName: "First name",
            width: 120,
            editable: true,
        },
        {
            field: "lastName",
            headerName: "Last name",
            width: 150,
            editable: true,
        },
        {
            field: "origin",
            headerName: "Origin",
            width: 150,
            editable: true,
        },
        {
            field: "contact",
            headerName: "Contact",
            width: 150,
            editable: true,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            width: 100,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(params.row._id)}>
                    Delete
                </Button>
            ),
        },
    ];

    // console.log("RowselectionModel: ", rowSelectionModel);
    return (
        <Box sx={{ height: "80vh", width: "100%" }}>
            <DataGrid
                columns={columns}
                rows={currentRows}
                getRowId={(row) => row._id}
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: "primary.light",
                    "& .MuiDataGrid-cell:hover": {
                        color: "primary.main",
                    },
                }}
                checkboxSelection
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    updateSelection(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelection}
            />
        </Box>
    );
};

export default BasicColumnsGrid;
