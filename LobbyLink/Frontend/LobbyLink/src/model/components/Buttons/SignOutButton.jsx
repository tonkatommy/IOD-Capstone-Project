import Button from "react-bootstrap/Button";

const SignOutButton = (params) => {
    return (
        <Button className={params.className}>
            {params.buttonText || "SIGN OUT"}
        </Button>
    );
};

export default SignOutButton;
