import React from 'react';
import { Box } from '@mui/material';
import { Toolbar, AppBar, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Navbar.css'

export default function Navbar() {

    return (
        <>
            <AppBar className='cor'>
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                    <Link to='/home' className='cursor' >
                        <Typography variant="h6" color="inherit" className='home-fonte'>
                            Home
                        </Typography>
                        </Link>
                   
                    </Box>

                    <Box display="flex">
                        <Box className='cursor' mx={1}>
                            <Typography color="inherit" font-size="5px">
                                Postagens
                            </Typography>
                        </Box>
                        <Box className='cursor' mx={1}>
                            <Typography font-size="5px" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box className='cursor' mx={1}>
                            <Typography font-size="5px" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box className='cursor' mx={1}>
                                <Typography font-size="5px" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}
