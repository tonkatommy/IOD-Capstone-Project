import Container from "react-bootstrap/esm/Container";
import "../../css/SafetyBrief.css";

const SafetyBriefPage = (params) => {
    return (
        <Container
            fluid
            className="safetyBriefPage-container">
            <Container
                fluid
                className="safetyBriefPage-inner-container">
                Safety Brief Content
            </Container>
        </Container>
    );
};

export default SafetyBriefPage;
