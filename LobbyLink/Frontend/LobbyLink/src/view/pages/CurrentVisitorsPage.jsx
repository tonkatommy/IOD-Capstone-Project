import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import CurrentVisitorsTable from "../../model/components/Tables/CurrentVisitorsTable";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import "../../css/pages/CurrentVisitors.css";
import VisitorButton from "../../model/components/Buttons/VisitorButton";
import GreenGradientBG from "../../model/components/Background/GreenGradientBG";
import { useNavigate } from "react-router-dom";

const CurrentVisitorsPage = (props) => {
    const navigate = useNavigate();

    const handleGoBackClick = (e) => {
        navigate("/welcome");
    };
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
