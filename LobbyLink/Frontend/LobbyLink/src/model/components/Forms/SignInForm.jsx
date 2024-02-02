import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { useState } from "react";

const SignInForm = (props) => {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [origin, setOrigin] = useState("");
    const [contact, setContact] = useState("");
    const [destination, setDestination] = useState("");

    if (props.id) {
        setUserId(props.id);
        setTitle(props.title ? props.title : "");
        setFirstName(props.firstName ? props.firstName : "");
        setLastName(props.lastName ? props.lastName : "");
        setOrigin(props.origin ? props.origin : "");
        setContact(props.contact ? props.contact : "");
        setDestination(props.destination ? props.destination : "");
    }

    return (
        <Container>
            <Form
                className="signInForm-form needs-validation"
                noValidate>
                <InputGroup className="mb-3 has-validation">
                    <InputGroup.Text
                        id="basic-addon-idNo"
                        className="signIn-input-group-text">
                        MD58 or ID No:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="id-input"
                        className="signIn-form-control"
                        placeholder="(Must be unique to you)"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        aria-label="id-input"
                        aria-describedby="basic-addon-idNo"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        id="basic-addon-title"
                        className="signIn-input-group-text">
                        Rank or Title:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="title-input"
                        className="signIn-form-control"
                        placeholder="(Service rank or Civilian title)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        aria-label="title-input"
                        aria-describedby="basic-addon-title"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        id="basic-addon-first-name"
                        className="signIn-input-group-text">
                        First Name:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="first-name-input"
                        className="signIn-form-control"
                        placeholder=""
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        aria-label="first-name-input"
                        aria-describedby="basic-addon-first-name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        id="basic-addon-last-name"
                        className="signIn-input-group-text">
                        Last Name:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="last-name-input"
                        className="signIn-form-control"
                        placeholder=""
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        aria-label="last-name-input"
                        aria-describedby="basic-addon-last-name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        id="basic-addon-contact"
                        className="signIn-input-group-text">
                        Contact No:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="contact-input"
                        className="signIn-form-control"
                        placeholder="Contact No (Ext or Mobile)"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        aria-label="contact-input"
                        aria-describedby="basic-addon-contact"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        id="basic-addon-origin"
                        className="signIn-input-group-text">
                        Place of Origin:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="origin-input"
                        className="signIn-form-control"
                        placeholder="(Where are you from?)"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        aria-label="origin-input"
                        aria-describedby="basic-addon-origin"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text
                        id="basic-addon-destination"
                        className="signIn-input-group-text">
                        Destination:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="destination-input"
                        className="signIn-form-control"
                        placeholder="(What unit or who are you going to see)"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        aria-label="destination"
                        aria-describedby="basic-addon-destination"
                    />
                </InputGroup>
            </Form>
        </Container>
    );
};

export default SignInForm;
