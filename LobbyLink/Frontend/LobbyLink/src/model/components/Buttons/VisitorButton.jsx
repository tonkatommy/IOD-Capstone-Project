import Button from "react-bootstrap/esm/Button";
import SignOutButton from "./SignOutButton";
import "../../../css/components/VisitorButton.css";

const VisitorButton = (params) => {
    const handleSignOutClick = (params) => {
        console.log("Sign Out Pressed");
    };

    return (
        <div
            class="visitor-btn-group btn-group"
            role="group"
            aria-label="Basic example">
            <Button className="visitor-button d-flex gap-2 align-items-center justify-content-start">
                <i class="bi bi-person-fill"></i>
                <span className="visitor-name me-2">CPL, Tommy Goodman</span>
                <i class="bi bi-signpost-split-fill"></i>
                <span className="visitor-destination me-auto">
                    Instrument Systems
                </span>
                <i class="bi bi-watch"></i>
                <span className="visitor-time-in ">10:13 Sun 28th Jan</span>
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
