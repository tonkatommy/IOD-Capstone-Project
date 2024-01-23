import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../../css/Details.css";
import DetailsForm from "../../model/components/Forms/DetailsForm";
import SignInButton from "../../model/components/Buttons/SignInButton";
import SignOutButton from "../../model/components/Buttons/SignOutButton";

const DetailsPage = (params) => {
    return (
        <Container
            fluid
            className="detailsPage-container">
            <Row className="justify-content-center">
                <Col
                    md="6"
                    className="d-flex flex-column justify-content-center min-vh-100">
                    <h1 className="detailsPage-title">Personnel Details</h1>
                    <h4 className="detailsPage-sub-title">
                        Make any change required and Save
                    </h4>
                    {/* Insert DetailsForm Here */}
                    <DetailsForm />
                    {/* Action Buttons */}
                    <Container fluid>
                        <div className="d-flex gap-3 my-4 justify-content-end">
                            <SignOutButton
                                buttonText="Cancel"
                                className="detailsPage-cancel-btn"
                            />
                            <SignInButton
                                buttonText="Save"
                                className="detailsPage-save-btn"
                            />
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailsPage;
