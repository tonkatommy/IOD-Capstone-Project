import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/esm/InputGroup";

const DetailsForm = (props) => {
    return (
        <Container>
            <Form className="detailsForm-form">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-details-idNo">
                        MD58 or ID No:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="(Must be unique to the person)"
                        aria-label="id-input-details"
                        aria-describedby="basic-addon-details-idNo"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-details-title">
                        Rank or Title:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="(Service rank or Civilian title)"
                        aria-label="title-input-details"
                        aria-describedby="basic-addon-details-title"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-details-first-name">
                        First Name:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder=""
                        aria-label="first-name-input-details"
                        aria-describedby="basic-addon-details-first-name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-details-last-name">
                        Last Name:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder=""
                        aria-label="last-name-input-details"
                        aria-describedby="basic-addon-details-last-name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-details-contact">
                        Contact No:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="Contact No (Ext or Mobile)"
                        aria-label="contact-input-details"
                        aria-describedby="basic-addon-details-contact"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-details-origin">
                        Place of Origin:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="(Where are you from?)"
                        aria-label="origin-input-details"
                        aria-describedby="basic-addon-details-origin"
                    />
                </InputGroup>
            </Form>
        </Container>
    );
};

export default DetailsForm;
