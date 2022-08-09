import React from 'react';
import { Box } from '@mui/material';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Action, addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    function goLogout() {
        dispatch(addToken(''))
        alert("Deslogando... Tchau, mô!")
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar className='cor'>
            <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between" }}>
                <Box mx={1} style={{ cursor: "pointer", display: 'flex', gap: '20px', alignItems: 'center', paddingLeft: '100px' }}>
                    <Link to='/home' className='cursor' >
                        <HomeIcon />
                    </Link>

                    <Typography color="inherit" font-size="5px">
                        PlayWithME
                    </Typography>
                </Box>

                <Box display="flex" style={{ paddingRight: '100px' }}>

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

                    <Link to='/login' className='text-decorator-none'>
                        <Box className='cursor' mx={1} onClick={goLogout}>
                            <Typography font-size="5px" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Link>

                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;

function dispatch(arg0: Action) {
    throw new Error('Function not implemented.');
}
