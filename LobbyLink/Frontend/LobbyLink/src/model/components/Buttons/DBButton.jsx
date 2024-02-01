import Button from "react-bootstrap/Button";

const DBButton = (props) => {
    return (
        <Button
            id={props.id}
            className={props.className}
            onClick={props.onClick}>
            {props.buttonText || "DB Button"}
        </Button>
    );
};

export default DBButton;
