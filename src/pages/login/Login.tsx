import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box, InputAdornment } from '@mui/material';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import './Login.css';
import { toast } from 'react-toastify';
import { AccountCircle, VpnKey } from '@material-ui/icons';


function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login('usuarios/logar', userLogin, setToken)
            toast.success('🦄 Ta logado tchutchucone', {
                position: "top-left",
                autoClose: 1999,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                progress: undefined,
                });

        } catch (error) {
            toast.error('🦄 Errou alguma coisa my princess', {
                position: "top-left",
                autoClose: 3999,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                progress: undefined,
                });
        }
    }

    return (
        <Grid className='box-form' container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={12} className="imagem centralizar" justifyContent='center' >
            <Grid alignItems='center' xs={4} justifyContent='center' className="centralizar">
                <Box paddingX={20} className='box box-principal'>
                    <form onSubmit={onSubmit} className='box'>
                        <Typography style={{ color: 'white' }} variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos">
                            LOGIN
                        </Typography>
                        <TextField style={{ backgroundColor: 'white' }} 
                        value={userLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                         id='usuario' 
                         label='Email' 
                         variant='outlined' 
                         name='usuario' 
                         margin='normal' 
                         fullWidth 
                         required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}/>

                        <TextField style={{ backgroundColor: 'white' }}
                         value={userLogin.senha} 
                         onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                         id='senha' 
                         label='Senha' 
                         variant='outlined' 
                         name='senha' 
                         margin='normal' 
                         type='password' 
                         fullWidth 
                         required
                                inputProps={{minLength: 8,maxLength: 50}}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <VpnKey />
                                        </InputAdornment>
                                    ),
                                }}/>
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='botao'>
                                Login
                            </Button>
                            <b className="form-ou"> OU</b>
                            <Link to='/cadastro'>
                                <Button type='submit' variant='contained' color='primary' className='botao'>
                               Cadastre-se
                            </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        
                           
                    </Box>
                </Box>
            </Grid>

            

            </Grid>
        </Grid>
    )

}

export default Login;