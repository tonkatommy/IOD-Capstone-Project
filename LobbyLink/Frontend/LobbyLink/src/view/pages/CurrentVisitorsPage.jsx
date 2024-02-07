import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import CurrentVisitorsTable from "../../model/components/Tables/CurrentVisitorsTable";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import VisitorButton from "../../model/components/Buttons/VisitorButton";
import GreenGradientBG from "../../model/components/Background/GreenGradientBG";
// import { useDatabaseContext } from "../../model/context/DatabaseContext";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/pages/CurrentVisitors.css";
import { DatabaseContext } from "../../model/context/DatabaseContext";

const CurrentVisitorsPage = (props) => {
    const navigate = useNavigate();
    const { currentDB, updateDB } = useContext(DatabaseContext);
    console.log("currentVisitors: ", currentDB);

    const handleGoBackClick = (e) => {
        navigate("/welcome");
    };

    // const fetchData = async () => {
    //     console.log("Start of fetch");

    //     await axios
    //         .get("http://localhost:3037/api/users")
    //         .then((res) => {
    //             console.log("Axios .then():", res.data);
    //             updateDB(res.data);
    //             // setCurrentRows(res.data.data);
    //         })
    //         .catch((error) => {
    //             console.error("Axios .error():", error);
    //         });
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <>
            <GreenGradientBG />
            <Container
                fluid
                className="currentVisitorsPage-container">
                <GoBackButton
                    onClick={handleGoBackClick}
                    className="currentVisitors-goBack-button z-3"
                />
                <Row className="justify-content-center">
                    <Col
                        md="8"
                        className="d-flex flex-column gap-3 justify-content-center min-vh-100 pb-5">
                        <div>
                            <p className="currentVisitorsPage-title">
                                Current Visitors
                            </p>
                            <p className="currentVisitorsPage-sub-text">
                                Find your name and press Sign Out
                            </p>
                        </div>
                        {/* <CurrentVisitorsTable /> */}
                        {currentDB ? (
                            currentDB.map((user) => {
                                console.log(user);
                                <VisitorButton visitor={user} />;
                            })
                        ) : (
                            <p>Loading...</p>
                        )}
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                        <VisitorButton />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CurrentVisitorsPage;
