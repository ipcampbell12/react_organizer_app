/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import getOptions from '../../options';

const options = getOptions();
const tabNames = ["Repeated Tasks", "Other Tasks", "Projects", "Things to Buy", "People to Contact"]

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    tabNames: options.typeOptions
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ onTab, getTasks, tabState }) {
    const [value, setValue] = useState(0);

    // console.log("tab state in Tabs is: ", tabState)
    useEffect(() => {
        getTasks()
    }, [tabState])

    const handleChange = (event, newValue) => {
        onTab(tabNames[newValue]);
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }} className="flex justify-center">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="flex justify-around">
                    {tabNames.map((tab, index) => <Tab label={tab} key={index} {...a11yProps(index)} className="font-semibold text-xl" />)}

                </Tabs>
            </Box>



        </Box>
    );
}

// <Tab label="Item One" {...a11yProps(0)} />
// <Tab label="Item Two" {...a11yProps(1)} />
// <Tab label="Item Three" {...a11yProps(2)} />