import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState } from "react";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
];

export default function DataTable() {
    const [users, setUsers] = useState([
        { id: 1, firstName: "John", lastName: "Doe" },
        // Add more users here
    ]);

    const addUser = () => {
        const newUser = {
            id: users.length + 1,
            firstName: "New",
            lastName: "User",
        };
        setUsers([...users, newUser]);
    };

    const removeUser = () => {
        const newUsers = [...users];
        newUsers.pop();
        setUsers(newUsers);
    };

    return (
        <div style={{ height: 400, width: "100%" }}>
            <Button
                variant="contained"
                color="primary"
                onClick={addUser}>
                Add User
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={removeUser}>
                Remove User
            </Button>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
            />
        </div>
    );
}
