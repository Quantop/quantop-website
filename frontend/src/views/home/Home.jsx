import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InfoModal from '../../components/home/InfoModal';
import './Home.scss';

const Home = () => {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);

  const openAboutModal = () => setAboutModalOpen(true);
  const openTeamModal = () => setTeamModalOpen(true);
  const openFaqModal = () => setFaqModalOpen(true);

  const closeModals = () => {
    setAboutModalOpen(false);
    setTeamModalOpen(false);
    setFaqModalOpen(false);
  };

  return (
    <div className="home">
      <Container>
        <CssBaseline />
        <img src="images/dark_solid_quantop_large_logo.svg" alt="Quantop Logo" className="logo" />

        <Grid container spacing={2} justifyContent="center" alignItems="center" flexDirection="column">
          <Grid item width="100%">
            <Button variant="contained" color="primary" className='grayscale-button' disabled>
              <Typography className='grayscale-button-text' component={Link} to="/dashboard">
                COMING SOON
              </Typography>
            </Button>
          </Grid>
          <Grid container flexDirection="row" justifyContent="center" paddingLeft="12px">
            <Grid item>
              <Button className='nav-button' onClick={openAboutModal}>
                <Typography variant="body" className='nav-button-text'>
                  About
                </Typography>
              </Button>
            </Grid>
            <Divider orientation="vertical" className='vertical-divider' flexItem />
            <Grid item>
              <Button className='nav-button' onClick={openTeamModal}>
                <Typography variant="body" className='nav-button-text'>
                  Team
                </Typography>
              </Button>
            </Grid>
            <Divider orientation="vertical" className='vertical-divider' flexItem />
            <Grid item>
              <Button className='nav-button' onClick={openFaqModal}>
                <Typography variant="body" className='nav-button-text'>
                  FAQ
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <InfoModal isOpen={aboutModalOpen} onClose={closeModals} title="About" content="About" />
        <InfoModal isOpen={teamModalOpen} onClose={closeModals} title="Team" content="Team" />
        <InfoModal isOpen={faqModalOpen} onClose={closeModals} title="FAQ" content="FAQ" />
      </Container>
    </div>
  );
};

export default Home;
