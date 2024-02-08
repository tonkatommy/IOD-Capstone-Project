// import * as React from "react";
import { useState, useContext } from "react";

// Material UI components:
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
// Matrial UI - X-Grid components
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from "@mui/x-data-grid";
// Axios
import axios from "axios";
// Database Context
import { DatabaseContext } from "../../context/DatabaseContext";
// Custom components
import IDModal from "../Modals/IDModal";

function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const acceptClick = (newID) => {
        console.log("Edit Toolbar: Modal accept clicked");
        const id = newID;

        setRows((oldRows) => [
            {
                _id: id,
                title: "",
                firstName: "",
                lastName: "",
                origin: "",
                contact: "",
                safetyBrief: new Date(),
                userType: "Visitor",
            },
            ...oldRows,
        ]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: "title" },
        }));
        axios
            .post(`http://localhost:3037/api/users/create`, {
                _id: newID,
                title: "",
                firstName: "",
                lastName: "",
                origin: "",
                contact: "",
                safetyBrief: new Date(),
                userType: "Visitor",
            })
            .then((response) => {
                console.log(response.data);
                console.log(
                    "FullCRUDTable: Modal acceptClick: User Created: ",
                    newID
                );
                getCurrentDB();
            })
            .catch((error) => console.log(error));
    };

    return (
        <GridToolbarContainer>
            <IDModal acceptClick={acceptClick}></IDModal>
            {/* <Button
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleClick}>
                Add User
            </Button> */}
        </GridToolbarContainer>
    );
}

export default function FullCRUDTable() {
    const { currentDB, setCurrentDB, getCurrentDB, pushCurrentDB } =
        useContext(DatabaseContext);
    console.log("FullCRUDTable: currentDB: ", currentDB);
    // const newRows = [...currentDB];
    // console.log("FullCRUDTable: newRows: ", newRows);
    const [rows, setRows] = useState(currentDB);
    // setRows(currentDB);
    console.log("FullCRUDTable: rows: ", rows);

    const [rowModesModel, setRowModesModel] = useState({});

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.Edit },
        });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
        });
        axios
            .put(`http://localhost:3037/api/users/update/${id}`)
            .then((response) => {
                console.log(response.data);
                console.log(
                    "FullCRUDTable: handleSaveClick: User Updated: ",
                    id
                );
                getCurrentDB();
            })
            .catch((error) => console.log(error));
    };

    const handleDeleteClick = (id) => () => {
        console.log("FullCRUDTable: handleDeleteClick: id: ", id);
        setRows(rows.filter((row) => row._id !== id));
        axios
            .delete(`http://localhost:3037/api/users/${id}`)
            .then((response) => {
                console.log(response.data);
                console.log(
                    "FullCRUDTable: handleDeleteClick: User Deleted: ",
                    id
                );
                getCurrentDB();
            })
            .catch((error) => console.log(error));
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row._id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row._id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    // Set the DataTable column headers
    const columns = [
        { field: "_id", headerName: "ID#", width: 90 },
        {
            field: "title",
            headerName: "Title",
            width: 80,
            align: "left",
            headerAlign: "left",
            editable: true,
        },
        {
            field: "firstName",
            headerName: "First name",
            width: 120,
            align: "left",
            headerAlign: "left",
            editable: true,
        },
        {
            field: "lastName",
            headerName: "Last name",
            width: 150,
            align: "left",
            headerAlign: "left",
            editable: true,
        },
        {
            field: "origin",
            headerName: "Origin",
            width: 150,
            align: "left",
            headerAlign: "left",
            editable: true,
        },
        {
            field: "contact",
            headerName: "Contact",
            width: 150,
            align: "left",
            headerAlign: "left",
            editable: true,
        },
        {
            field: "safetyBrief",
            headerName: "H&S Brief",
            type: "date",
            width: 100,
            valueGetter: ({ value }) => value && new Date(value),
            editable: true,
        },
        {
            field: "userType",
            headerName: "User Type",
            width: 110,
            editable: true,
            type: "singleSelect",
            valueOptions: ["Visitor", "Employee", "Admin"],
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            width: 100,
            cellClassName: "actions",
            getActions: ({ id }) => {
                const isInEditMode =
                    rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: "primary.main",
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Box
            sx={{
                height: "70vh",
                width: "100%",
                "& .actions": {
                    color: "text.secondary",
                },
                "& .textPrimary": {
                    color: "text.primary",
                },
            }}
            className="db-grid-box">
            <DataGrid
                rows={rows}
                getRowId={(row) => row._id}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={{
                    toolbar: EditToolbar,
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
            />
        </Box>
    );
}
