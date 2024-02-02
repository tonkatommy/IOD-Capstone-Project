import Button from "react-bootstrap/Button";

const AckButton = (props) => {
    return (
        <Button
            className={props.className}
            onClick={props.onClick}>
            I acknowledge
            <br />
            SIGN IN
        </Button>
    );
};

export default AckButton;
