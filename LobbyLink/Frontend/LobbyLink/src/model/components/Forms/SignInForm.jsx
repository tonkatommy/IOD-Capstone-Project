import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { useState } from "react";
import axios from "axios";

const SignInForm = (props) => {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [origin, setOrigin] = useState("");
    const [contact, setContact] = useState("");
    const [destination, setDestination] = useState("");

    const [validated, setValidated] = useState(false);

    const handleOnChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setUserId(e.target.value);
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);

        if (form.checkValidity() === true) {
            e.preventDefault();

            axios
                .post("http://localhost:3037/api/users/create", {
                    _id: userId,
                    title: title,
                    firstName: firstName,
                    lastName: lastName,
                    origin: origin,
                    contact: contact,
                    userType: "Visitor",
                    lastDestination: destination,
                    timeIn: new Date(),
                })
                .then((response) => {
                    console.log(
                        "SignInForm: handleSubmit: axios.post: ",
                        response.data
                    );
                    props.onSignIn(response.data);
                })
                .catch((error) => {
                    console.error(
                        "SignInForm: handleSubmit: ERROR axios.post: ",
                        error
                    );
                });
        }
    };

    return (
        <Container>
            <Form
                id="sign-in-form"
                className="signInForm-form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}>
                <InputGroup
                    hasValidation
                    className="mb-3">
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
                        autoFocus
                        required
                        onChange={(e) => handleOnChange(e)}
                        aria-label="id-input"
                        aria-describedby="basic-addon-idNo"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter an ID number.
                    </Form.Control.Feedback>
                </InputGroup>
                <InputGroup
                    hasValidation
                    className="mb-3">
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
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        aria-label="title-input"
                        aria-describedby="basic-addon-title"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a title.
                    </Form.Control.Feedback>
                </InputGroup>
                <InputGroup
                    hasValidation
                    className="mb-3">
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
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        aria-label="first-name-input"
                        aria-describedby="basic-addon-first-name"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your first name.
                    </Form.Control.Feedback>
                </InputGroup>
                <InputGroup
                    hasValidation
                    className="mb-3">
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
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        aria-label="last-name-input"
                        aria-describedby="basic-addon-last-name"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your last name.
                    </Form.Control.Feedback>
                </InputGroup>
                <InputGroup
                    hasValidation
                    className="mb-3">
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
                        required
                        onChange={(e) => setContact(e.target.value)}
                        aria-label="contact-input"
                        aria-describedby="basic-addon-contact"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your contact number.
                    </Form.Control.Feedback>
                </InputGroup>
                <InputGroup
                    hasValidation
                    className="mb-3">
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
                        required
                        onChange={(e) => setOrigin(e.target.value)}
                        aria-label="origin-input"
                        aria-describedby="basic-addon-origin"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your place of origin.
                    </Form.Control.Feedback>
                </InputGroup>
                <InputGroup
                    hasValidation
                    className="mb-3">
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
                        required
                        onChange={(e) => setDestination(e.target.value)}
                        aria-label="destination"
                        aria-describedby="basic-addon-destination"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your destination.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form>
        </Container>
    );
};

export default SignInForm;
