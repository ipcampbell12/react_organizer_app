import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import classes from './UiModal.module.css';
import SelectMenu from './SelectMenu';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function UiModal({ show, handleClose, }) {
    const [workHome, setWorkhome] = React.useState('');
    const workHomeOptions = ["Work", "Home"];
    const [when, setWhen] = React.useState('');
    const whenOptions = ['Today', 'This Week', 'This Month', 'Later', 'Someday Maybe'];
    const [type, setType] = React.useState('');
    const typeOptions = ["Repeated Tasks", "Other Tasks", "Projects", "Things to Buy", "People to Contact"];
    const labels = ["Work/Home", "When", "Type"]

    const handleChange = (event, setter) => {
        setter(event.target.value);
    };


    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >

            <Box sx={style} className={classes["container"]}>
                <div className={classes["top-menus"]}>
                    <SelectMenu choice={workHome} handleChange={() => handleChange(setWorkhome)} options={workHomeOptions} label={labels[0]} className={classes["menu"]} />
                    <SelectMenu choice={when} handleChange={() => handleChange(setWhen)} options={whenOptions} label={labels[1]} className={classes["menu"]} />
                    <SelectMenu choice={type} handleChange={() => handleChange(setType)} options={typeOptions} label={labels[2]} className={classes["menu"]} />
                </div>

            </Box>
        </Modal>

    );
}

// <Button onClick={handleOpen}>Open modal</Button>