import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, Divider, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import InfoModal from '../../components/home/InfoModal';
import './Home.scss';

const AboutContent = () => {
  return (
    <div>
      <Typography variant="body1">
        Quantop is a financial analysis dashboard that provides insights into stock market trends and sentiment analysis.
        Our platform is designed to help investors make informed decisions by providing real-time data and analysis.
      </Typography>
    </div>
  );
}

const TeamContent = () => {
  return (
    <div>
      <Typography variant="body1">
        Our team is comprised of experienced professionals in finance, data analysis, and software development.
        We are passionate about providing the best tools for investors to make informed decisions.
      </Typography>
      <span>&nbsp;</span>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          {/* Left Column */}
        </Grid>
        <Grid item xs={4} className='team-member'>
          <div>
            <Grid item className='user-icon-container'>
              <AccountCircleIcon className="user-icon"/>
            </Grid>
            <Typography variant="body1" className="member-name">
              Kyle James
            </Typography>
            <Typography variant="body2" className="member-role">
              Software Developer
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          {/* Right Column */}
        </Grid>
      </Grid>
    </div>
  );
}

const FaqContent = () => {
  return (
    <div>
      <Typography variant="body1">
        <strong>What types of data does Quantop provide?</strong>
      </Typography>
      <Typography variant="body1">
        Quantop provides stock market data, including stock prices, historical data, and sentiment analysis. We also offer various financial indicators and charts to help you analyze market trends.
      </Typography>
      <span>&nbsp;</span>
      <Typography variant="body1">
        <strong>When will Quantop be open to the public?</strong>
      </Typography>
      <Typography variant="body1">
        We are currently in the very early stages of development but hope to launch a basic version of our platform soon. Please check back for updates!
      </Typography>
    </div>
  );
}

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

        <InfoModal isOpen={aboutModalOpen} onClose={closeModals} title="About" content={<AboutContent />} />
        <InfoModal isOpen={teamModalOpen} onClose={closeModals} title="Team" content={<TeamContent />} />
        <InfoModal isOpen={faqModalOpen} onClose={closeModals} title="FAQ" content={<FaqContent />} />
      </Container>
    </div>
  );
};

export default Home;
