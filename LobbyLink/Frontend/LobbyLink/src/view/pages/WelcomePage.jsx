import "../../css/pages/Welcome.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SignInButton from "../../model/components/Buttons/SignInButton";
import SignOutButton from "../../model/components/Buttons/SignOutButton";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const WelcomePage = (props) => {
    const navigate = useNavigate();

    const handleSignInClick = (e) => {
        navigate("/signin");
    };

    const handleSignOutClick = (e) => {
        navigate("/current-visitors"); // TODO: change to database page when created
    };

    const handleDBClick = (e) => {
        navigate("/database");
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
                    <Button
                        className="btn btn-warning mx-auto"
                        onClick={handleDBClick}>
                        DATABASE
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default WelcomePage;
