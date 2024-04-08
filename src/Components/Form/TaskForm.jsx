import * as React from 'react';
import classes from './UiModal.module.css';
import SelectMenu from './SelectMenu';
import InputComponent from '../UI/InputComponent'
import TextAreaComponent from '../UI/TextAreaComponent';
import Slider from '../UI/SliderComponent'
import getOptions from '../../options';
import ModalComponent from '../UI/ModalComponent';


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


export default function TaskForm({ show, handleClose }) {

    //States
    const [workHome, setWorkhome] = React.useState('');
    const [when, setWhen] = React.useState('');
    const [type, setType] = React.useState('')
    const [frequency, setFrequency] = React.useState('');
    const [emailReminder, setEmailReminder] = React.useState(false);
    const [calEvent, setCalEvent] = React.useState(false);

    //Arrays
    const options = getOptions();
    const selectionMenus = [options.whenOptions, options.whenOptions, options.typeOptions]
    const statesArray = [workHome, when, type];
    const setterArray = [setWorkhome, setWhen, setType]

    const handleChange = (event, setter) => {
        setter(event.target.value);
    };

    const header = "Add New Task";

    const modalContent = (
        <React.Fragment>
            <div className={classes["top-div"]}>
                {selectionMenus.map((menu, index) => {
                    return (
                        <SelectMenu choice={statesArray[index]} handleChange={() => handleChange(setterArray[index])} options={menu} label={options.labels[index]} className={classes["individual-menu"]} key={index} />
                    )
                })}
            </div>
            <div className={classes["middle-div"]}>
                <SelectMenu choice={frequency} handleChange={() => handleChange(setFrequency)} options={options.frequencyOptions} label={options.labels[3]} />
            </div>
            <div className={classes["lower-div"]}>
                <InputComponent placeholder={"Enter task name"} label={"Task name"} />
                <TextAreaComponent placeholder={"Enter task description"} label={"Task description"} />∂
                <Slider label={"Send Email reminder"} />
                <Slider label={"Create Calendar Event"} />
            </div>
        </React.Fragment>
    )


    return (

        <ModalComponent show={show} handleClose={handleClose} header={header} modalContent={modalContent} />

    );
}

// <Button onClick={handleOpen}>Open modal</Button>