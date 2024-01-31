import React from 'react';
import { Button, Container, CssBaseline, Grid, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <CssBaseline />
        <img src="images/dark_solid_quantop_large_logo.svg" alt="Quantop Logo" className="logo" />

        <Grid container spacing={2} justifyContent="center" alignItems="center" flexDirection="column">
          <Grid item width="100%">
            <Link to="/dashboard">
              <Button variant="contained" color="primary" className='grayscale-button'>
                ENTER APP
              </Button>
            </Link>
          </Grid>
          <Grid container flexDirection="row" justifyContent="center" paddingLeft="12px">
            <Grid item>
              <Button className='nav-button'>
                <Typography variant="body" className='nav-button-text'>
                  About
                </Typography>
              </Button>
            </Grid>
            <Divider orientation="vertical" className='vertical-divider' flexItem />
            <Grid item>
              <Button className='nav-button'>
                <Typography variant="body" className='nav-button-text'>
                  Team
                </Typography>
              </Button>
            </Grid>
            <Divider orientation="vertical" className='vertical-divider' flexItem />
            <Grid item>
              <Button className='nav-button'>
                <Typography variant="body" className='nav-button-text'>
                  FAQ
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
};

export default Home;
