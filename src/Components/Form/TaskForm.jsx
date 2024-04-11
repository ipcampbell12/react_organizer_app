import * as React from 'react';
//import classes from './UiModal.module.css';
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
    const setterArray = [setWorkhome, setWhen, setType, setFrequency];
    const buttons = ["Cancel", "Add Task"];

    const handleChange = (event, setter) => {
        setter(event.target.value);
    };

    const header = "Add New Task";

    // console.log(buttons)
    const modalContent = (
        <div className="flex flex-col justify-center border-2 p-4 rounded-lg bg-yellow-50">
            <div className="flex">
                {selectionMenus.map((menu, index) => {
                    return (
                        <SelectMenu choice={statesArray[index]} handleChange={(e) => handleChange(e, setterArray[index])} options={menu} label={options.labels[index]} key={index} className="border-2 rounded-lg p-3 text-center" />
                    )
                })}
            </div>
            <div>
                {frequency === "Repeated Tasks" ? <SelectMenu choice={frequency} handleChange={(e) => handleChange(e, setterArray[3])} options={options.frequencyOptions} label={options.labels[3]} /> : ''}
            </div>
            <div className="flex flex-col">
                <InputComponent placeholder={"Enter task name"} label={"Task name"} className="m-1 p-1 rounded-lg" />
                <TextAreaComponent placeholder={"Enter task description"} label={"Task description"} className="m-1 border-2 p-1 rounded-lg" />
                <Slider label={"Send Email reminder"} />
                <Slider label={"Create Calendar Event"} />
            </div>
        </div>
    )


    return (

        <ModalComponent show={show} handleClose={handleClose} header={header} modalContent={modalContent} buttonArr={buttons} />

    );
}

// <Button onClick={handleOpen}>Open modal</Button>