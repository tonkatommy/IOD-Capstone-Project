import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const DatabaseContext = createContext();

export const DatabaseProvider = (props) => {
    const [currentDB, setCurrentDB] = useState([]);

    // Fetch the currentDB when the component mounts
    useEffect(() => {
        axios
            .get("http://localhost:3037/api/users")
            .then((response) => {
                setCurrentDB(response.data.data);
                console.log("DBContext axios get: ", response.data);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    // Update the currentDB when it changes
    useEffect(() => {
        axios
            .put("http://localhost:3037/api/users/update-users", currentDB)
            .catch((error) => console.error("Error updating data: ", error));
    }, [currentDB]);

    const getCurrentDB = () => {
        axios
            .get("http://localhost:3037/api/users")
            .then((response) => {
                setCurrentDB(response.data.data);
                console.log("DBContext axios get: ", response.data);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    };

    return (
        <DatabaseContext.Provider
            value={{ currentDB, setCurrentDB, getCurrentDB }}>
            {props.children}
        </DatabaseContext.Provider>
    );
};

// export const useDatabaseContext = () => {
//     return useContext(DatabaseContext);
// };
