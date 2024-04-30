import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import CardComponent from '../UI/CardComponent';

function DataDisplay({ tasks, setTasks, tabState, getTasks }) {


    console.log("tab state in DataDisplay is: ", tabState)
    useEffect(() => {
        getTasks()
    }, [tabState])


    return (
        <ul>
            {tasks.slice(1).filter(dataRow => dataRow[5] === tabState).map((task, i) => {
                return <CardComponent key={i} task={task} />
            }
            )}
        </ul>
    );
}

export default DataDisplay;