import LobbyLinkRoutes from "./controllers/routes/LobbyLinkRoutes";
import "./App.css";

// Context Providers
import { DatabaseProvider } from "./model/context/DatabaseContext";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <DatabaseProvider>
                    <LobbyLinkRoutes />
                </DatabaseProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
