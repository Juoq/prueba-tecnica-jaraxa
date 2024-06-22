import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

export const ModalComponent = ({textOpenModal, selector }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>{textOpenModal}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          position={"absolute"}
          top={"20%"}
          left={"40%"}
          transform={"translate(-50%, -50%)"}
          width={"max-content"}
          bgcolor={"background.paper"}
          border={"2px solid #000"}
          boxShadow={24}
          p={4}
          height={"min-content"}
        >
          {selector.map((name) => (
            <Typography key={name}>{name}</Typography>
          ))}
        </Box>
      </Modal>
    </>
  );
};
