import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.scss';

export const Loading: React.FC = () => {
  return (
    <Box className="loading">
      <Box className="loading-container">
        <CircularProgress size={30} color="secondary" />
        <Typography className="loading-text" variant="h6">
          Loading
        </Typography>
      </Box>
    </Box>
  );
};
