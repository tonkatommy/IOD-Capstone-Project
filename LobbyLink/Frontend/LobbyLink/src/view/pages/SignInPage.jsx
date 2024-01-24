import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SignInButton from "../../model/components/Buttons/SignInButton";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import SignInForm from "../../model/components/Forms/SignInForm";
import "../../css/SignIn.css";

const SignInPage = (params) => {
    const navigate = useNavigate();

    const handleSignInClick = (e) => {
        navigate("/safety-brief");
    };

    const handleGoBackClick = (e) => {
        navigate("/welcome");
    };

    return (
        <Container
            fluid
            className="signInPage-container">
            <Row>
                <Col
                    md="6"
                    className="signInPage-left d-flex flex-column justify-content-center min-vh-100">
                    <p className="signInPage-please-text">
                        Please enter all details
                        <br />
                        to continue:
                    </p>
                    <p className="signInPage-required-text">
                        *All details required
                    </p>
                    <SignInForm />
                </Col>
                <Col
                    md="6"
                    className="signInPage-right d-flex flex-column justify-content-center min-vh-100">
                    <Image
                        src="/logo-dark-375.png"
                        roundedCircle
                        className="signInPage-logo align-self-center"
                    />
                    <SignInButton
                        className="signInPage-btn-sign-in"
                        onClick={handleSignInClick}
                    />
                    <GoBackButton
                        className="signInPage-btn-go-back"
                        onClick={handleGoBackClick}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default SignInPage;
