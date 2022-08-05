import React from 'react';
import { Box } from '@mui/material';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom';

import './Navbar.css'

export default function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado.")
        history('/login')
    }

    return (
        <>
            <AppBar className='cor'>
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Box mx={1} style={{ cursor: "pointer", display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Link to='/home' className='cursor' >
                            <HomeIcon />
                        </Link>

                        <Typography color="inherit" font-size="5px">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex">

                        <Link to='/posts' className='cursor'>
                            <Box className='cursor' mx={1}>
                                <Typography color="inherit" font-size="5px">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='cursor'>
                            <Box className='cursor' mx={1}>
                                <Typography font-size="5px" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box className='cursor' mx={1}>
                                <Typography font-size="5px" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        
                            <Box className='cursor' mx={1} onClick={goLogout}>
                                <Typography font-size="5px" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                       
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}
