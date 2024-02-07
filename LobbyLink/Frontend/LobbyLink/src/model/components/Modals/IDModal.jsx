import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function IDModal({ acceptClick }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        console.log("IDModal: handleClose");
        setOpen(false);
    };
    const onSubmit = (event) => {
        console.log("IDModal: onSubmit: ", event.newID);
        setOpen(false);
        acceptClick(event.newID);
    };

    return (
        <>
            <Button
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleOpen}>
                Add User
            </Button>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="id-modal-title"
                aria-describedby="id-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}>
                <Fade in={open}>
                    <Box sx={style}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}>
                            <Typography
                                id="id-modal-title"
                                variant="h6"
                                component="h2">
                                New User ID
                            </Typography>
                            <Typography
                                id="id-modal-description"
                                sx={{ my: 2 }}>
                                Please enter the new User ID#:
                            </Typography>
                            <TextField
                                {...register("newID", { required: true })}
                                error={Boolean(errors.newID)}
                                helperText={
                                    errors.newID && "User ID# is required"
                                }
                                label="User ID#"
                            />
                            {/* other fields go here */}
                            <Button type="submit">Submit</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
