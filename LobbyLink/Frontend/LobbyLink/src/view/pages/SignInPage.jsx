import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SignInButton from "../../model/components/Buttons/SignInButton";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import SignInForm from "../../model/components/Forms/SignInForm";
import { useNavigate } from "react-router-dom";
// Database Context
import { DatabaseContext } from "../../model/context/DatabaseContext";
import "../../css/pages/SignIn.css";
import moment from "moment";

const SignInPage = (props) => {
    // const { currentUser, setCurrentUser } = useUserContext();
    const { currentDB, setCurrentDB, getCurrentDB, pushCurrentDB } =
        useContext(DatabaseContext);
    const navigate = useNavigate();

    const handleSignInClick = (e) => {
        console.log("SignInPage: handleSignInClick: e: ", e);
        getCurrentDB();
        console.log("SignInPage: handleSignInClick: currentDB: ", currentDB);
        if (e.data && e.data.safetyBrief) {
            console.log(
                "SignInPage: handleSignInClick: e.data.safetyBrief: ",
                e.data.safetyBrief
            );

            const sbDate = moment(e.data.safetyBrief);
            console.log("sbDate", sbDate);
            const now = moment();
            console.log("now", now);
            const diff = sbDate.diff(now, "days");
            console.log("diff", diff);
            if (diff < 0) {
                navigate("/safety-brief");
            } else {
                navigate("/welcome");
            }
        }
        // navigate("/safety-brief");
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
                    <SignInForm
                        user={null}
                        onSignIn={handleSignInClick}
                    />
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
                        type="submit"
                        form="sign-in-form"
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
