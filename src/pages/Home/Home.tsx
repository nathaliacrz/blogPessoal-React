import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {

  let navigate = useNavigate()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>

        <Grid item xs={6} style={{ paddingLeft: '150px', paddingTop: '80px', paddingBottom: '30px' }}>
          <img src="https://i.imgur.com/Zwi2dFa.png" alt="Garoto jogando" width="480px" height="480px" />
        </Grid>

        <Grid alignItems="center" item xs={6} style={{ paddingTop: '80px' }}>
          <Box paddingX={10} >
            <Typography className='titulo, titulo-principal' variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Seja bem vindo(a)!</Typography>
            <Typography className='titulo' variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >Compartilhe aqui conteúdo sobre os seus jogos favoritos como: macetes, conquistas, dicas, pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts">
              <Button variant="outlined" className='botao'>Ver Postagens</Button>
            </Link>

          </Box>
        </Grid>



        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home