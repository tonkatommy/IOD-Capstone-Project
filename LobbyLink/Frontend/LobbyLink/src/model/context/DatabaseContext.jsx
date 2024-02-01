import { createContext, useContext, useState } from "react";

const DatabaseContext = createContext();

export const DatabaseProvider = (props) => {
    const [currentDB, setDatabase] = useState(null);

    const updateDB = (dbData) => {
        setDatabase(dbData);
    };

    return (
        <DatabaseContext.Provider value={{ currentDB, updateDB }}>
            {props.children}
        </DatabaseContext.Provider>
    );
};

export const useDatabaseContext = () => {
    return useContext(DatabaseContext);
};
