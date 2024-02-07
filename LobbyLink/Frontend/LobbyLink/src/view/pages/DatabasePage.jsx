// Routing by router-dom
import { useNavigate } from "react-router-dom";
// Material UI components
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { DatabaseContext } from "../../model/context/DatabaseContext";
// Custom components
import RedGradientBG from "../../model/components/Background/RedGradientBG";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import FullCRUDTable from "../../model/components/Tables/FullCRUDTable";
// Custom CSS
import "../../css/pages/Database.css";

const DatabasePage = (props) => {
    const { currentDB, setCurrentDB } = useContext(DatabaseContext);
    const navigate = useNavigate();

    const handleGoBackClick = (e) => {
        navigate("/welcome");
    };
    return (
        <>
            <RedGradientBG />
            <Container
                sx={{ py: 5 }}
                className="db-container">
                <GoBackButton
                    className="btn-db-goback"
                    onClick={handleGoBackClick}
                />
                <Stack
                    direction="column"
                    spacing={2}>
                    <Typography
                        variant="p"
                        className="db-title">
                        Database Management
                    </Typography>
                    <Typography
                        variant="p"
                        className="db-sub-title">
                        Use the controls to manage the users in the database:
                    </Typography>
                    <FullCRUDTable></FullCRUDTable>
                </Stack>
            </Container>
        </>
    );
};

export default DatabasePage;
