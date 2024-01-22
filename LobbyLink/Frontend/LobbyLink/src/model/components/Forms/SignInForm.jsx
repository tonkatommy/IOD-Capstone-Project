import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/esm/InputGroup";

const SignInForm = (params) => {
    return (
        <Container>
            <Form className="signInForm-form">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-idNo">
                        MD58 or ID No:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="(Must be unique to you)"
                        aria-label="id-input"
                        aria-describedby="basic-addon-idNo"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-title">
                        Rank or Title:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="(Service rank or Civilian title)"
                        aria-label="title-input"
                        aria-describedby="basic-addon-title"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-first-name">
                        First Name:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder=""
                        aria-label="first-name-input"
                        aria-describedby="basic-addon-first-name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-last-name">
                        Last Name:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder=""
                        aria-label="last-name-input"
                        aria-describedby="basic-addon-last-name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-contact">
                        Contact No:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="Contact No (Ext or Mobile)"
                        aria-label="contact-input"
                        aria-describedby="basic-addon-contact"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-origin">
                        Place of Origin:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="(Where are you from?)"
                        aria-label="origin-input"
                        aria-describedby="basic-addon-origin"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon-destination">
                        Destination:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        placeholder="(What unit or who are you going to see)"
                        aria-label="destination"
                        aria-describedby="basic-addon-destination"
                    />
                </InputGroup>
            </Form>
        </Container>
    );
};

export default SignInForm;
