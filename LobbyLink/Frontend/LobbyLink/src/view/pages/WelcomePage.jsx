import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SignInButton from "../SignInButton";
import "../../css/Welcome.css";
import SignOutButton from "../../model/components/Buttons/SignOutButton";

const WelcomePage = (params) => {
    return (
        <Container
            fluid
            className="welcomePage-container">
            <Row>
                <Col
                    md="6"
                    className="welcomePage-left d-flex flex-column justify-content-center min-vh-100">
                    <Image
                        src="/logo-dark-375.png"
                        roundedCircle
                        className="welcomePage-logo align-self-center"
                    />
                    <h2 className="welcomePage-logo-subtext-1">Welcome to</h2>
                    <h1 className="welcomePage-logo-subtext-2">LobbyLink</h1>
                </Col>
                <Col
                    md="6"
                    className="welcomePage-right d-flex flex-column justify-content-center min-vh-100">
                    <p className="welcomePage-please-text">
                        Please sign in & out
                        <br />
                        Upon arrival or departure
                    </p>

                    <SignInButton className="welcomePage-btn-sign-in" />
                    <SignOutButton className="welcomePage-btn-sign-out" />
                </Col>
            </Row>
        </Container>
    );
};

export default WelcomePage;
