import { createContext, useContext, useState } from "react";

const RowsContext = createContext();

export const RowsProvider = (props) => {
    const [currentRows, setRows] = useState([]);

    const setCurrentRows = (row) => {
        setRows(row);
    };

    return (
        <RowsContext.Provider value={{ currentRows, setCurrentRows }}>
            {props.children}
        </RowsContext.Provider>
    );
};

export const useRowsContext = () => {
    return useContext(RowsContext);
};
