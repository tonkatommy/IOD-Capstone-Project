import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DatabaseProvider } from "./model/context/DatabaseContext.jsx";
import { UserProvider } from "./model/context/UserContext.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <DatabaseProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </DatabaseProvider>
    </BrowserRouter>
);
