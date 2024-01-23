import { useState } from "react";
import "./App.css";
import WelcomePage from "./view/pages/WelcomePage";
import DetailsPage from "./view/pages/DetailsPage";
import SignInPage from "./view/pages/SignInPage";
import SafetyBriefPage from "./view/pages/SafetyBriefPage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <WelcomePage /> */}
            {/* <SignInPage /> */}
            {/* <SafetyBriefPage /> */}
            <DetailsPage />
        </>
    );
}

export default App;
