import "../../css/Welcome.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SignInButton from "../../model/components/Buttons/SignInButton";
import SignOutButton from "../../model/components/Buttons/SignOutButton";
import { useNavigate } from "react-router-dom";

const WelcomePage = (params) => {
    const navigate = useNavigate();

    const handleSignInClick = (e) => {
        navigate("/signin");
    };

    const handleSignOutClick = (e) => {
        navigate("/welcome"); // TODO: change to database page when created
    };

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
                    <h2 className="welcomePage-welcome-text">Welcome to</h2>
                    <h1 className="welcomePage-company-text">LobbyLink</h1>
                </Col>
                <Col
                    md="6"
                    className="welcomePage-right d-flex flex-column justify-content-center min-vh-100">
                    <p className="welcomePage-please-text">
                        Please sign in & out
                        <br />
                        Upon arrival or departure
                    </p>

                    <SignInButton
                        className="welcomePage-btn-sign-in"
                        onClick={handleSignInClick}
                    />
                    <SignOutButton
                        className="welcomePage-btn-sign-out"
                        onClick={handleSignOutClick}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default WelcomePage;
