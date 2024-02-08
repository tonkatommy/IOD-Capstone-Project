import Button from "react-bootstrap/Button";

const SignInButton = (props) => {
    return (
        <Button
            type={props.type || "button"}
            form={props.form}
            className={props.className}
            onClick={props.onClick}>
            {props.buttonText || "SIGN IN"}
        </Button>
    );
};

export default SignInButton;
