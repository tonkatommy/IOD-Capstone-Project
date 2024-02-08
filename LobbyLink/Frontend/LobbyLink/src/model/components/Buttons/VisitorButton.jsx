import Button from "react-bootstrap/esm/Button";
import SignOutButton from "./SignOutButton";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import moment from "moment";
import "../../../css/components/VisitorButton.css";

const VisitorButton = ({ visitor, handleSignOutClick }) => {
    // console.log("VisitorButton: visitor: ", visitor);
    let timeInDate = moment(visitor.timeIn);

    return (
        <div
            id={visitor._id ? visitor._id : ""}
            className="visitor-btn-group btn-group"
            role="group"
            aria-label="Basic example">
            <Button
                id={visitor._id ? visitor._id : ""}
                className="visitor-button">
                <Row>
                    <Col className="d-flex gap-2 align-items-center">
                        <i className="bi bi-person-fill"></i>
                        <span className="visitor-name me-2">
                            {visitor.title +
                                ", " +
                                visitor.firstName +
                                " " +
                                visitor.lastName || "CPL, Thomas Goodman"}
                        </span>
                    </Col>
                    <Col className="d-flex gap-2 align-items-center">
                        <i className="bi bi-signpost-split-fill"></i>
                        <span className="visitor-destination me-auto">
                            {visitor.lastDestination || "Instrument Systems"}
                        </span>
                    </Col>
                    <Col className="d-flex gap-2 align-items-center">
                        <i className="bi bi-watch"></i>
                        <span className="visitor-time-in ">
                            {timeInDate.format("HH:mm:ss ddd Do MMM YY")}
                        </span>
                    </Col>
                </Row>
            </Button>
            <SignOutButton
                id={visitor._id ? visitor._id : ""}
                className="visitor-button-sign-out flex-grow-0"
                onClick={handleSignOutClick}
                buttonText={"Sign Out"}
            />
        </div>
    );
};

export default VisitorButton;
