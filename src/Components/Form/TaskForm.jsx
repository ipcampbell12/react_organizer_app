import { useState, useEffect } from 'react';
//import classes from './UiModal.module.css';
import SelectMenu from './SelectMenu';
import InputComponent from '../UI/InputComponent'
import TextAreaComponent from '../UI/TextAreaComponent';
import Slider from '../UI/SliderComponent'
import getOptions from '../../options';
import ModalComponent from '../UI/ModalComponent';
import axios from 'axios';
import { API_URL } from '../../config';



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


export default function TaskForm({ show, handleClose, setTasks, tasks, getTasks }) {

    //States
    const [workHome, setWorkhome] = useState('');
    const [when, setWhen] = useState('');
    const [type, setType] = useState('')
    const [frequency, setFrequency] = useState('');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [emailReminder, setEmailReminder] = useState(false);
    const [calEvent, setCalEvent] = useState(false);

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleEmailReminder = (e) => {
        setEmailReminder(e.target.value)
    }
    const handleCalEvent = (e) => {
        setCalEvent(e.target.value)
    }

    const formData = {
        title: title,
        description: description,
        workHome: workHome,
        when: when,
        type: type,
        frequency: frequency,
        reminder: emailReminder,
        calEvent: calEvent

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log("Data passed to form:", formData)
        try {
            const response = await axios.post(`${API_URL}/api/tasks`, formData);
            console.log("Task created:", response.data);
            setTasks([...tasks, response.data]);
            getTasks()
        } catch (error) {
            console.error("Error creating task:", error);
        }
    }

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
        setTitle('')
        setDescription('')
        setEmailReminder(false);
        setCalEvent(false);
        console.log("The reset function has run")
    }

    const header = "Add New Task";


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
                <InputComponent placeholder={"Enter task name"} label={"Task name"} className="m-1 p-1 rounded-lg" onTitle={handleTitle} />
                <TextAreaComponent placeholder={"Enter task description"} label={"Task description"} onDescription={handleDescription} className="m-1 border-2 p-1 rounded-lg" />
                <Slider label={"Send Email reminder"} onHandle={handleEmailReminder} />
                <Slider label={"Create Calendar Event"} onHandle={handleCalEvent} />
            </div>
        </div>
    )


    return (

        <ModalComponent show={show} handleClose={handleClose} reset={resetSelectStates} header={header} modalContent={modalContent} buttonArr={buttons} onSubmit={onSubmit} />

    );
}

// <Button onClick={handleOpen}>Open modal</Button>