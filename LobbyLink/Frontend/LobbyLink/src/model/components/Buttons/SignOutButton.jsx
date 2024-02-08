import Button from "react-bootstrap/Button";

const SignOutButton = (props) => {
    return (
        <Button
            id={props.id}
            className={props.className}
            onClick={props.onClick}>
            {props.buttonText || "SIGN OUT"}
        </Button>
    );
};

export default SignOutButton;
