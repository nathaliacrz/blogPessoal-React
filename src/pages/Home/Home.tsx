import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f3eee0" }}>

        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#31090a", fontWeight: "bold" }}>Seja bem vinde!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#31090a", fontWeight: "bold" }}>Expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#bf6164", color: "white" }}>Ver Postagens</Button>
          </Box>
        </Grid>

        <Grid item xs={6} >
          <img src="https://cdn-icons.flaticon.com/png/512/2482/premium/2482539.png?token=exp=1659055095~hmac=821f8531fe9415e7a1186ef2f1fcc68f" alt="" width="480px" height="480px" />
        </Grid>
        
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
    </>
  )
}

export default Home