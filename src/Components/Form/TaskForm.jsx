import { useState, useEffect } from 'react';
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
    const [workHome, setWorkhome] = useState('');
    const [when, setWhen] = useState('');
    const [type, setType] = useState('')
    const [frequency, setFrequency] = useState('');
    const [emailReminder, setEmailReminder] = useState(false);
    const [calEvent, setCalEvent] = useState(false);



    //Arrays
    const options = getOptions();
    const selectionMenus = [options.workHomeOptions, options.whenOptions, options.typeOptions]
    const statesArray = [workHome, when, type, frequency];
    const setterArray = [setWorkhome, setWhen, setType, setFrequency];
    const buttons = ["Cancel", "Add Task"];

    const handleSelectChange = (event, setter) => {
        setter(event.target.value);
    };

    const resetSelectStates = () => {
        setterArray.forEach(setter => setter(''));
        console.log("The reset function has run")
    }

    const header = "Add New Task";

    useEffect(() => {
        console.log("When is: ", type)
    }, [type])
    // console.log(buttons)
    const modalContent = (
        <div className="flex flex-col justify-center border-2 p-4 rounded-lg bg-yellow-50">
            <div className="flex">
                {selectionMenus.map((menu, index) => {
                    return (
                        <SelectMenu choice={statesArray[index]} handleChange={(e) => handleSelectChange(e, setterArray[index])} options={menu} label={options.labels[index]} key={index} className="border-2 rounded-lg p-3 text-center" />
                    )
                })}
            </div>
            <br />
            <div>
                {type === "Repeated Tasks" ? <SelectMenu choice={frequency} handleChange={(e) => handleSelectChange(e, setterArray[3])} options={options.frequencyOptions} label={options.labels[3]} /> : ''}
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

        <ModalComponent show={show} handleClose={handleClose} reset={resetSelectStates} header={header} modalContent={modalContent} buttonArr={buttons} />

    );
}

// <Button onClick={handleOpen}>Open modal</Button>