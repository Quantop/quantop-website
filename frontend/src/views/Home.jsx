import React from 'react';
import { Button, Container, CssBaseline, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <CssBaseline />
        {/* Your Logo Component or <img> tag */}
        <img src="images/dark_solid_quantop_large_logo.svg" alt="Quantop Logo" className="logo" />

        {/* Optional: Add margin or spacing */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" className='grayscale-button'>
              ENTER APP
            </Button>
          </Grid>
        </Grid>

        {/* Enter App Button */}
        
      </Container>
    </div>
  );
};

export default Home;
