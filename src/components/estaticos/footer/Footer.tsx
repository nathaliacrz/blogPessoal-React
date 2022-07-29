import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import {Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid>
                <Grid alignItems="center" item xs={12}>
                    <Box  style={{ backgroundColor: "#621214", height: "30px", paddingTop: "10px" }}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/tthanalia/" target="_blank">
                                <InstagramIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/nathaliacrz/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.github.com/nathaliacrz/" target="_blank">
                                <GithubIcon style={{ fontSize: 25, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#621214", height: "30px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >Nathalia Cruz Santos - Blog Pessoal © 2022</Typography>
                        </Box>
                        
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;