import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { busca } from '../../../services/Service';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema []>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
); 
  let navigate = useNavigate();

  useEffect(() =>{
    if(token === ''){
      toast.warning('Você precisa estar logado.', {
        position: "top-center",
        autoClose: 5999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        progress: undefined,
        });
      navigate('/login')
    }
  }, [token])

  async function getTema(){
    await busca('/tema', setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
      getTema()
  }, [temas.length])


    return (
      <>
      {
        temas.map(tema => (
        <Box m={2} p={3} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.nome}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >
  
                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft botao-atualizar" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary" className='botao-deletar'>
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        ))
        }
      </>
    );
  }
  
  
  export default ListaTema;