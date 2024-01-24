import Button from "react-bootstrap/Button";

const AckButton = (params) => {
    return (
        <Button
            className={params.className}
            onClick={params.onClick}>
            I acknowledge
            <br />
            SIGN IN
        </Button>
    );
};

export default AckButton;
