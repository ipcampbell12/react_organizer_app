import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonSet({ buttonArr, handleClose, reset, onSubmit }) {
    // console.log("The buttons are working")
    // console.log(buttonArr)
    // console.log("The buttons are still working")
    return (
        <Stack spacing={2} direction="row">
            {buttonArr.map((button, idx) => {
                if (button === "Add Task") { return <Button variant="contained" key={idx} onClick={(e) => { onSubmit(e), handleClose(), reset() }}>{button}</Button> }
                else {
                    return <Button variant="contained" key={idx} onClick={() => { handleClose(), reset() }}>{button}</Button>
                }
            })}


        </Stack>
    );
}