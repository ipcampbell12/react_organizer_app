import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';



function CustomAppBar() {

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {['Archive', 'Settings', 'Stats'].map((page) => (
                    <Button
                        key={page}
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 1, mx: 7, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}

            </Box>

        </React.Fragment>
    );
}

export default CustomAppBar;