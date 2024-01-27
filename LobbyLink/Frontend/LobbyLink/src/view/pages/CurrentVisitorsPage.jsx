import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CurrentVisitorsTable from "../../model/components/Tables/CurrentVisitorsTable";
import "../../css/pages/CurrentVisitors.css";
import VisitorButton from "../../model/components/Buttons/VisitorButton";

const CurrentVisitorsPage = (params) => {
    return (
        <Container
            fluid
            className="currentVisitorsPage-container">
            <Row className="justify-content-center">
                <Col
                    md="8"
                    className="d-flex flex-column justify-content-center min-vh-100">
                    <h1>Current Visitors</h1>
                    <p className="currentVisitorsPage-sub-text">
                        Find your name and press Sign Out
                    </p>
                    <CurrentVisitorsTable />
                    <VisitorButton />
                </Col>
            </Row>
        </Container>
    );
};

export default CurrentVisitorsPage;
