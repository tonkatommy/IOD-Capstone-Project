import Button from "react-bootstrap/esm/Button";
import SignOutButton from "./SignOutButton";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../../../css/components/VisitorButton.css";

const VisitorButton = (props) => {
    const handleSignOutClick = (e) => {
        console.log("Sign Out Pressed");
    };

    return (
        <div
            className="visitor-btn-group btn-group"
            role="group"
            aria-label="Basic example">
            <Button
                id={props.id ? props.id : ""}
                className="visitor-button">
                <Row>
                    <Col className="d-flex gap-2 align-items-center">
                        <i className="bi bi-person-fill"></i>
                        <span className="visitor-name me-2">
                            CPL, Tommy Goodman
                        </span>
                    </Col>
                    <Col className="d-flex gap-2 align-items-center">
                        <i className="bi bi-signpost-split-fill"></i>
                        <span className="visitor-destination me-auto">
                            Instrument Systems
                        </span>
                    </Col>
                    <Col className="d-flex gap-2 align-items-center">
                        <i className="bi bi-watch"></i>
                        <span className="visitor-time-in ">
                            10:13 Sun 28th Jan
                        </span>
                    </Col>
                </Row>
            </Button>
            <SignOutButton
                className="visitor-button-sign-out flex-grow-0"
                onClick={handleSignOutClick}
                buttonText={"Sign Out"}
            />
        </div>
    );
};

export default VisitorButton;
