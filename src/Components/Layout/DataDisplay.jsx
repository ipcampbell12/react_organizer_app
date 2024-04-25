import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';

function DataDisplay(props) {
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        async function getTasks() {
            try {
                const response = await axios.get(`${API_URL}/api/tasks`)
                console.log(response)
                //have to use response.data
                setTasks(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getTasks()
    }, [])


    return (
        <ul>
            {tasks.map((task, i) => {
                return <li key={i}>{task}</li>
            }
            )}
        </ul >
    );
}

export default DataDisplay;