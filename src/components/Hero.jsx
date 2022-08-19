import react from 'react';
import { green } from '@mui/material/colors';

import { Button, Typography, Box } from '@mui/material';

// const success = green['400'];

export default function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
        rel="stylesheet"
      />
      <Box style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'column', padding:'50px',height:'350px'}}>
        <Typography variant="h2" component="div" gutterBottom>Welcome To Khelo India</Typography>
        <Typography variant="subtitle1" component="div" style={{width:'700px', textAlign:'center'}}>
          The importance of sports and fitness in one’s life is invaluable.
          Playing sports inculcates team spirit and develops strategic
          thinking, analytical thinking, leadership skills, goal setting and
          risk taking. A fit and healthy individual leads to an equally
          healthy society and strong nation.
        </Typography>
        <br />
          <Button href="get-started" color="success" variant="contained" style={{ borderRadius: '50px' }} >Get Started</Button>
      </Box>
    </>
  );
}
