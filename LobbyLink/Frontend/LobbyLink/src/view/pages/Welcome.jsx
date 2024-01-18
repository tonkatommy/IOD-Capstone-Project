import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../../css/Welcome.css";

const Welcome = (params) => {
    return (
        <Container
            fluid
            className="welcome-container">
            <Row>
                <Col
                    md="6"
                    className="welcome-left d-flex flex-column justify-content-center min-vh-100">
                    <Image
                        src="/logo-dark-375.png"
                        roundedCircle
                        className="welcome-logo align-self-center"
                    />
                    <h2 className="welcome-logo-subtext-1">Welcome to</h2>
                    <h1 className="welcome-logo-subtext-2">LobbyLink</h1>
                </Col>
                <Col
                    md="6"
                    className="welcome-right d-flex flex-column justify-content-center min-vh-100">
                    <p className="please-text">
                        Please sign in & out
                        <br />
                        Upon arrival or departure
                    </p>

                    <Button
                        size="lg"
                        className="btn-sign-in">
                        SIGN IN
                    </Button>
                    <Button
                        size="lg"
                        className="btn-sign-out">
                        SIGN OUT
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;
