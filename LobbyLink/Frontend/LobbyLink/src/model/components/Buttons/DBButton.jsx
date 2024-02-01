import Button from "react-bootstrap/Button";

const DBButton = (params) => {
    return (
        <Button
            className={params.className}
            onClick={params.onClick}>
            {params.buttonText || "DB Button"}
        </Button>
    );
};

export default DBButton;
