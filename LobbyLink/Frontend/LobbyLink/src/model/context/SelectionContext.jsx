import { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export const SelectionProvider = (props) => {
    const [rowSelection, setRowSelection] = useState([]);

    const updateSelection = (selection) => {
        setRowSelection(selection);
    };

    return (
        <SelectionContext.Provider value={{ rowSelection, updateSelection }}>
            {props.children}
        </SelectionContext.Provider>
    );
};

export const useSelectionContext = () => {
    return useContext(SelectionContext);
};
