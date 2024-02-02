import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DatabaseProvider } from "./model/context/DatabaseContext.jsx";
import { UserProvider } from "./model/context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <DatabaseProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </DatabaseProvider>
    </BrowserRouter>
);
