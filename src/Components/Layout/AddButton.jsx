
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddButton({ onOpen, show }) {

    //console.log(`Open state is ${show}`)

    return (
        <IconButton aria-label="add" onClick={onOpen}>
            <AddCircleIcon />
        </IconButton>
    );
}

export default AddButton;