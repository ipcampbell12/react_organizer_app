import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ModalComponent({ show, handleClose, headerVariant, header, modalContent }) {
    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={style}>
                <Typography variant={headerVariant} component="div" sx={{ textAlign: "center" }}>
                    {header}
                </Typography>
                {modalContent}

            </Box>

        </Modal>
    );
}

export default ModalComponent;