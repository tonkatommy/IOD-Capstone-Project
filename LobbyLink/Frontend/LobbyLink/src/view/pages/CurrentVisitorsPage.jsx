import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import CurrentVisitorsTable from "../../model/components/Tables/CurrentVisitorsTable";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import VisitorButton from "../../model/components/Buttons/VisitorButton";
import GreenGradientBG from "../../model/components/Background/GreenGradientBG";
// import { useDatabaseContext } from "../../model/context/DatabaseContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/pages/CurrentVisitors.css";
import { DatabaseContext } from "../../model/context/DatabaseContext";

const CurrentVisitorsPage = (props) => {
    const navigate = useNavigate();
    const { currentDB, setCurrentDB, refreshCurrentDB, pushCurrentDB } =
        useContext(DatabaseContext);
    console.log("CurrentVisitorsPage: currentDB: ", currentDB);

    const [currentVisitors, setCurrentVisitors] = useState();

    const updateVisitorsList = () => {
        let visitors = currentDB.filter((user) => user.timeIn != null);
        console.log("CurrentVisitorsPage: visitors: ", visitors);

        setCurrentVisitors(visitors);
    };

    useEffect(() => {
        updateVisitorsList();
    }, []);

    console.log("CurrentVisitorsPage: currentVisitors: ", currentVisitors);

    const handleGoBackClick = (e) => {
        navigate("/welcome");
    };

    const handleSignOutClick = (e) => {
        console.log("CurrentVisitorsPage: handleSignOutClick: ", e.target.id);
        const index = currentDB.findIndex((user) => user._id === e.target.id);
        console.log("CurrentVisitorsPage: handleSignOutClick: index: ", index);
        currentDB[index].timeIn = null;
        console.log(
            "CurrentVisitorsPage: handleSignOutClick: currentDB[index]: ",
            currentDB[index]
        );
        setCurrentDB(currentDB);
        pushCurrentDB();
        console.log(
            "CurrentVisitorsPage: handleSignOutClick: currentDB: ",
            currentDB
        );
        updateVisitorsList();

        navigate("/welcome");

        // axios
        //     .put(`/users/update/${e.target.id}`, {
        //         timeIn: null,
        //     })
        //     .then((response) => {
        //         console.log(
        //             "CurrentVisitorsPage: handleSignOutClick: axios.put: ",
        //             response.data
        //         );
        //     })
        //     .catch((error) => {
        //         console.error(
        //             "CurrentVisitorsPage: handleSignOutClick: axios.put: ",
        //             error
        //         );
        //     });
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
                        {currentVisitors ? (
                            currentVisitors.map((user) => {
                                console.log(
                                    "CurrentVisitorsPage: currentVisitors.map: user: ",
                                    user
                                );
                                return (
                                    <VisitorButton
                                        visitor={user}
                                        handleSignOutClick={handleSignOutClick}
                                    />
                                );
                            })
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CurrentVisitorsPage;
