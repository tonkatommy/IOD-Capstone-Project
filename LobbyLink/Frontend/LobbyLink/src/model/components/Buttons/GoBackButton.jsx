import Button from "react-bootstrap/Button";

const GoBackButton = (props) => {
    return (
        <Button
            className={props.className}
            onClick={props.onClick}>
            Go Back
        </Button>
    );
};

export default GoBackButton;
