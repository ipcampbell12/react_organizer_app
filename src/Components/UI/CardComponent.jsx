import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CardComponent({ task }) {
    // console.log("The task is: ", task)
    return (
        <Card sx={{ minWidth: 275, maxWidth: 600, borderColor: 'primary.main', borderRadius: '16px', m: 1 }} >
            <CardContent className="bg-emerald-100">
                <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                    <b>Title:</b> {task[1]}
                </Typography>
                <Typography variant="body2">
                    <b>Description:</b> {task[2]}
                </Typography>
                <br />
                <Box className="flex flex-row" >
                    <Typography variant="body2" sx={{ mr: 2 }}>
                        <b>Work/Home:</b> {task[3]}
                    </Typography>
                    <Typography variant="body2" sx={{ mr: 2 }}>
                        <b>When:</b> {task[4]}
                    </Typography>
                    <Typography variant="body2" sx={{ mr: 2 }}>
                        <b>Type: </b>{task[5]}
                    </Typography>

                    {task[5] === "Repeated Tasks" ? <Typography variant="body2" sx={{ mr: 2 }}>
                        <b>Frequency:</b> {task[6]}
                    </Typography> : ''}

                    <Typography variant="body2" sx={{ mr: 2 }}>
                        <b>Email Reminder:</b> {task[7]}
                    </Typography>
                    <Typography variant="body2" sx={{ mr: 2 }}>
                        <b> Calendar Event:</b> {task[8]}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}