import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonSet from './ButtonComponent';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '3%',
    p: 4,
};

function ModalComponent({ show, handleClose, headerVariant, header, modalContent, buttonArr }) {
    console.log(buttonArr)
    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={style}>
                <Typography variant={headerVariant} component="div" sx={{ textAlign: "center" }}>
                    <div className="flex justify-center">
                        <h1 className="border-2 p-2 m-2 rounded-lg bg-green-50 text-center w-2/5">{header}</h1>
                    </div>
                </Typography>
                {modalContent}
                <div className="p-2 m-2 flex justify-center">
                    <ButtonSet buttonArr={buttonArr} handleClose={handleClose} />
                </div>

            </Box>


        </Modal>
    );
}

export default ModalComponent;