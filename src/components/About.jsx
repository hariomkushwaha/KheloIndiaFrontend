import React from 'react';
import { Button, Typography, Box } from '@mui/material';

export default function Hero() {
  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', padding: '50px', height: '270px' }}>
        <Typography variant="h3" component="div" gutterBottom>About Khelo India</Typography>
        <Typography variant="h4" component="div" gutterBottom>National programme for development of sports</Typography>
        <Typography variant="subtitle2" component="div" style={{ width: '700px', textAlign: 'center' }}>
          <p>
            The importance of sports and fitness in one's life is invaluable.
            Playing sports inculcates team spirit and develops strategic
            thinking, analytical thinking, leadership skills, goal setting and
            risk taking. A fit and healthy individual leads to an equally
            healthy society and strong nation.
          </p>
          <p>
            Sports is an extremely important component for the overall
            development of our nation...
          </p>
        </Typography>
      </Box>
    </>
  );
}
