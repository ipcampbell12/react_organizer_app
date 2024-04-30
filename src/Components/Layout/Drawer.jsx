import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import getOptions from '../../options';
import { API_URL } from '../../config';
import axios from 'axios';


//Components 
import BasicTabs from './Tabs';
import CustomAppBar from './CustomAppBar';
import AddButton from './AddButton';
import SearchComponent from './Search';
import TaskForm from '../Form/TaskForm';

//Icons 
import TodayIcon from '@mui/icons-material/Today';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import DataDisplay from './DataDisplay';

const icons = [<TodayIcon key={0} />, <CalendarViewWeekIcon key={1} />, <CalendarMonthIcon key={2} />, <DeviceUnknownIcon key={3} />, <PsychologyAltIcon key={4} />]

const options = getOptions();



const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
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

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [tasks, setTasks] = useState([])
    const [tabState, setTabState] = useState('')

    const handleModalOpen = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <CssBaseline />

            <AppBar position="fixed" open={open}>

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >


                    </Menu>
                    <CustomAppBar />
                    <AddButton key={3} sx={{ ml: 6 }} show={modalShow} onOpen={handleModalOpen} />
                    <SearchComponent />
                </Toolbar>
            </AppBar>
            <TaskForm handleClose={handleModalClose} show={modalShow} setTasks={setTasks} tasks={tasks} />

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {options.whenOptions.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {icons[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />

            </Main>
            <BasicTabs className="m3 justify-center" onTab={setTabState} getTasks={getTasks} tabState={tabState} />
            <DataDisplay tasks={tasks} getTasks={getTasks} setTasks={setTasks} tabState={tabState} />
        </Box>
    );
}


// the tabs had been way over to the left because of the negative positioning in the main component