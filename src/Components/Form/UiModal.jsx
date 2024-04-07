import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import classes from './UiModal.module.css';
import SelectMenu from './SelectMenu';
import InputComponent from '../UI/InputComponent'
import TextAreaComponent from '../UI/TextAreaComponent';
import Typography from '@mui/material/Typography';
import Slider from '../UI/SliderComponent'

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



export default function UiModal({ show, handleClose, }) {
    const [workHome, setWorkhome] = React.useState('');
    const workHomeOptions = ["Work", "Home"];
    const [when, setWhen] = React.useState('');
    const whenOptions = ['Today', 'This Week', 'This Month', 'Later', 'Someday Maybe'];
    const [type, setType] = React.useState('');
    const typeOptions = ["Repeated Tasks", "Other Tasks", "Projects", "Things to Buy", "People to Contact"];
    const labels = ["Work/Home", "When", "Type", "Frequency"]
    const [frequency, setFrequency] = React.useState('');
    const frequencyOptions = ["Daily", "Weekly", "Monthly", "Yearly", "Custom"];

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
                <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
                    Add New Task
                </Typography>
                <div className={classes["top-div"]}>
                    <SelectMenu choice={workHome} handleChange={() => handleChange(setWorkhome)} options={workHomeOptions} label={labels[0]} className={classes["individual-menu"]} />
                    <SelectMenu choice={when} handleChange={() => handleChange(setWhen)} options={whenOptions} label={labels[1]} className={classes["individual-menu"]} />
                    <SelectMenu choice={type} handleChange={() => handleChange(setType)} options={typeOptions} label={labels[2]} className={classes["individual-menu"]} />
                </div>
                <div className={classes["middle-div"]}>
                    <SelectMenu choice={frequency} handleChange={() => handleChange(setFrequency)} options={frequencyOptions} label={labels[3]} />
                </div>
                <div className={classes["lower-div"]}>
                    <br />
                    <InputComponent placeholder={"Enter task name"} label={"Task name"} />
                    <br />
                    <TextAreaComponent placeholder={"Enter task description"} label={"Task description"} />
                    <br />
                    <Slider label={"Send Email reminder"} />
                    <br />
                    <Slider label={"Create Calendar Event"} />
                </div>

            </Box>

        </Modal>

    );
}

// <Button onClick={handleOpen}>Open modal</Button>