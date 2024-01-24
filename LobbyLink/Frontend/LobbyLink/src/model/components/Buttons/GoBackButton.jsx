import Button from "react-bootstrap/Button";

const GoBackButton = (params) => {
    return (
        <Button
            className={params.className}
            onClick={params.onClick}>
            Go Back
        </Button>
    );
};

export default GoBackButton;
