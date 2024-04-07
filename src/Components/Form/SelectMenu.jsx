//import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectMenu({ choice, handleChange, options, label }) {
    console.log(label)
    console.log(options)
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={choice}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        options.map((option, index) => <MenuItem value={option} key={index}>{option}</MenuItem>)
                    }


                </Select>
            </FormControl>
        </Box>
    );
}