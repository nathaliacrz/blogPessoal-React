import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';
import './Navbar.css'

export default function Navbar() {

    return (
        <>
            <AppBar style={{ backgroundColor: "#621214" }}>
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Box className='cursor' mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>

                    <Box display="flex">
                        <Box className='cursor' mx={1} style={{ cursor: "pointer", }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box className='cursor' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box className='cursor' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Box className='cursor' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}
