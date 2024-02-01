import { Routes, Route } from "react-router-dom";
import WelcomePage from "../../view/pages/WelcomePage";
import SignInPage from "../../view/pages/SignInPage";
import SafetyBriefPage from "../../view/pages/SafetyBriefPage";
import DetailsPage from "../../view/pages/DetailsPage";
import CurrentVisitorsPage from "../../view/pages/CurrentVisitorsPage";
import DatabasePage from "../../view/pages/DatabasePage";

const LobbyLinkRoutes = (params) => {
    return (
        <>
            {/* Main Routes */}
            <Routes>
                {/* Index route to Welcome Page */}
                <Route
                    index
                    element={<WelcomePage />}
                />
                {/* Welcome route to Welcome Page - won't trigger reload */}
                <Route
                    path="/welcome"
                    element={<WelcomePage />}
                />
                {/* SignIn route to SignInPage  */}
                <Route
                    path="/signin"
                    element={<SignInPage />}
                />
                {/* Details route to DetailsPage  */}
                <Route
                    path="/details"
                    element={<DetailsPage />}
                />
                {/* Safety Brief route to SafetyBriefPage  */}
                <Route
                    path="/safety-brief"
                    element={<SafetyBriefPage />}
                />
                {/* Current Visitors route to CurrentVisitorsPage  */}
                <Route
                    path="/current-visitors"
                    element={<CurrentVisitorsPage />}
                />
                {/* Database route to DatabasePage  */}
                <Route
                    path="/database"
                    element={<DatabasePage />}
                />
            </Routes>
        </>
    );
};

export default LobbyLinkRoutes;
