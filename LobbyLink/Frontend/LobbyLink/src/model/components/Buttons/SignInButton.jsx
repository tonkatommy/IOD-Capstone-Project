import Button from "react-bootstrap/Button";

const SignInButton = (params) => {
    return (
        <Button
            className={params.className}
            onClick={params.onClick}>
            {params.buttonText || "SIGN IN"}
        </Button>
    );
};

export default SignInButton;
