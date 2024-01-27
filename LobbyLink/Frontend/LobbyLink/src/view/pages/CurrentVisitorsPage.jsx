import Row from "react-bootstrap/esm/Row";
import "../../css/CurrentVisitors.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

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
                </Col>
            </Row>
        </Container>
    );
};

export default CurrentVisitorsPage;
