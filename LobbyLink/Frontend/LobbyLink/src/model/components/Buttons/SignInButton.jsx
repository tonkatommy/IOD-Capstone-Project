import Button from "react-bootstrap/Button";

const SignInButton = (props) => {
    return (
        <Button
            className={props.className}
            onClick={props.onClick}>
            {props.buttonText || "SIGN IN"}
        </Button>
    );
};

export default SignInButton;
