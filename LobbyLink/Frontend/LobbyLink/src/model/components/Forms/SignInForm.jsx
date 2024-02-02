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
                    <InputGroup.Text id="basic-addon-idNo">
                        MD58 or ID No:
                    </InputGroup.Text>
                    <Form.Control
                        size="lg"
                        id="id-input"
                        placeholder="(Must be unique to you)"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
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
                        id="title-input"
                        placeholder="(Service rank or Civilian title)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        id="first-name-input"
                        placeholder=""
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
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
                        id="last-name-input"
                        placeholder=""
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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
                        id="contact-input"
                        placeholder="Contact No (Ext or Mobile)"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
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
                        id="origin-input"
                        placeholder="(Where are you from?)"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
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
                        id="destination-input"
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
