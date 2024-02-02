import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
    const [currentUser, setUser] = useState(null);

    const setCurrentUser = (user) => {
        setUser(user);
    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
