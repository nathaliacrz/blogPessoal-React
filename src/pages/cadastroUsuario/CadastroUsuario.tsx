import React, {useState, useEffect, ChangeEvent} from 'react';
import { Box, InputAdornment } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service'
import User from '../../models/User';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';
import { AccountCircle, Mail, VpnKey } from '@material-ui/icons';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha && user.senha.length >= 8) {
    
          try {
            await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
            if(confirmarSenha === user.senha){
                cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('🦄 Ta cadastrade tchutchucone', {
                    position: "top-left",
                    autoClose: 1999,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    progress: undefined,
                    });
                }
          } catch (error) {
            console.log(`Error: ${error}`);
    
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
    
        } else {
            toast.error('A senha deve conter no mínimo 8 caracteres.', {
                position: "top-left",
                autoClose: 3999,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                progress: undefined,
                });
    
          setUser({ ...user, senha: "" });
          setConfirmarSenha("");
        }
      }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='cor-fundo'>
            <Grid item xs={12} className='imagem2 alinhar-box'>

            
            <Grid item xs={6} alignItems='center' className='alinhar-box'>
                <Box padding={10} className='box3'>
                        <form onSubmit={onSubmit}>
                            <Typography style={{color: '#52301b'}}variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos2">
                                CADASTRE-SE
                            </Typography>
                            <TextField  style={{backgroundColor: 'white'}} 
                            value={user.nome} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id='nome' 
                            label='Nome' 
                            variant='outlined' 
                            name='nome' 
                            margin='normal' 
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            />
                            <TextField style={{backgroundColor: 'white'}} 
                            value={user.usuario} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id='usuario' 
                            label='Email' 
                            variant='outlined' 
                            name='usuario' 
                            margin='normal' 
                            fullWidth
                            required
                            inputProps={{minLength: 8,maxLength: 50}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Mail />
                                    </InputAdornment>
                                ),
                            }} />
                            <TextField style={{backgroundColor: 'white'}} 
                            value={user.senha} 
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
                            <TextField style={{backgroundColor: 'white'}} 
                            value={confirmarSenha} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' 
                            label='Confirmar Senha' variant='outlined' name='confirmarSenha' 
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
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='primary' className='btnCancelar botoes'>
                                        Cancelar
                                    </Button>
                                </Link>

                                
                                    <Button type='submit' variant='contained' color='primary' className='botoes'>
                                        Cadastrar
                                    </Button>
                            
                            </Box>
                        </form>
                </Box>
            </Grid>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;