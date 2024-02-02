import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useDatabaseContext } from "../../context/DatabaseContext";

const DBDataGrid = () => {
    // const { currentDB, setCurrentDB } = useDatabaseContext();
    const { demoData } = useDemoData({
        dataSet: "Commodity",
        rowLength: 10,
        maxColumns: 6,
    });

    console.log("demoData: ", demoData);

    // const columns = [
    //     { field: "_id", headerName: "ID#", width: 90 },
    //     {
    //         field: "title",
    //         headerName: "Title",
    //         type: "number",
    //         width: 110,
    //         editable: true,
    //     },
    //     {
    //         field: "firstName",
    //         headerName: "First name",
    //         width: 150,
    //         editable: true,
    //     },
    //     {
    //         field: "lastName",
    //         headerName: "Last name",
    //         width: 150,
    //         editable: true,
    //     },
    //     {
    //         field: "origin",
    //         headerName: "Origin",
    //         width: 150,
    //         editable: true,
    //     },
    //     {
    //         field: "contact",
    //         headerName: "Contact",
    //         width: 150,
    //         editable: true,
    //     },
    //     // {
    //     //     field: "fullName",
    //     //     headerName: "Full name",
    //     //     description: "This column has a value getter and is not sortable.",
    //     //     sortable: false,
    //     //     width: 160,
    //     //     valueGetter: (params) =>
    //     //         `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    //     // },
    // ];

    // const rows = currentDB.data;

    // console.log("data rows: ", rows);

    return (
        <div style={{ width: "100%" }}>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid {...demoData} />
            </div>
        </div>
    );
};

export default DBDataGrid;
