import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import SentimentIcon from '@mui/icons-material/SentimentSatisfied';
import ThariIcon from '@mui/icons-material/EmojiEmotions';
import CollabIcon from '@mui/icons-material/Group';
import './Home.scss';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#424242', // Main color for primary elements
    },
    background: {
      default: '#000000', // Background color
      paper: '#303030', // Paper color (used for cards)
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='home'>
        <Grid container spacing={3} justifyContent="center">
          {/* Sentiment Section */}
          <Grid item xs={12} md={4}>
            <Card elevation={0}> {/* Set elevation to 0 to remove the shadow */}
              <CardContent>
                <SentimentIcon fontSize="large" />
                <Typography variant="h5">Sentiment</Typography>
                <Divider />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Thari Section */}
          <Grid item xs={12} md={4}>
            <Card elevation={0}>
              <CardContent>
                <ThariIcon fontSize="large" />
                <Typography variant="h5">Thari</Typography>
                <Divider />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Collab Section */}
          <Grid item xs={12} md={4}>
            <Card elevation={0}>
              <CardContent>
                <CollabIcon fontSize="large" />
                <Typography variant="h5">Collab</Typography>
                <Divider />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Home;
