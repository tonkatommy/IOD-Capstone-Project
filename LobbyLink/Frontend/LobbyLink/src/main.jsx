import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DatabaseProvider } from "./model/context/DatabaseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <DatabaseProvider>
                <App />
            </DatabaseProvider>
        </BrowserRouter>
    </React.StrictMode>
);
