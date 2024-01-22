import Button from "react-bootstrap/Button";

const AckButton = (params) => {
    return (
        <Button className={params.className}>
            I acknoledge
            <br />
            SIGN IN
        </Button>
    );
};

export default AckButton;
