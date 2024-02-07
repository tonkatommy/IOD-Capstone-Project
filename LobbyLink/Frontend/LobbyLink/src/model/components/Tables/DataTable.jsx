import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { useDatabaseContext } from "../../context/DatabaseContext";

const DataTable = (props) => {
    const { currentDB, updateDB } = useDatabaseContext();

    // Set the DataTable column headers
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
            field: "safetyBrief",
            headerName: "H&S Brief",
            width: 90,
            editable: true,
        },
        // // Adds a delete column containing a Button for easy delete
        // {
        //     field: "delete",
        //     headerName: "Delete",
        //     sortable: false,
        //     width: 100,
        //     renderCell: (params) => (
        //         <Button
        //             variant="contained"
        //             color="secondary"
        //             onClick={() => handleDelete(params.row._id)}>
        //             Delete
        //         </Button>
        //     ),
        // },
    ];

    function EditToolbar(props) {
        const { setRows, setRowModesModel } = props;

        const handleClick = () => {
            const id = randomId();
            setRows((oldRows) => [
                ...oldRows,
                { id, name: "", age: "", isNew: true },
            ]);
            setRowModesModel((oldModel) => ({
                ...oldModel,
                [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
            }));
        };

        return (
            <GridToolbarContainer>
                <Button
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleClick}>
                    Add record
                </Button>
            </GridToolbarContainer>
        );
    }
    return (
        <>
            <DataGrid></DataGrid>
        </>
    );
};

export default DataTable;
