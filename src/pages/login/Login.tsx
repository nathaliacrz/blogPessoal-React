import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box } from '@mui/material';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import './Login.css';
import { toast } from 'react-toastify';


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
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} className='box'>
                    <form onSubmit={onSubmit} className='box'>
                        <Typography style={{ color: 'white' }} variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos">
                            Entrar
                        </Typography>
                        <TextField style={{ backgroundColor: 'white' }} value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField style={{ backgroundColor: 'white' }} value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='botao'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos text-decorator-none">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className="imagem">

            </Grid>
        </Grid>
    )

}

export default Login;