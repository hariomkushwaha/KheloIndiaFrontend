import React from 'react'
import { Box, Grid, Link, Typography, Button, Stack } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ p: 2, py: 4 }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Grid container spacing={2} sx={{ width: '80%' }}>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>Product</Typography>
              <br />
              <Link underline="hover">Overview</Link>
              <Link underline="hover">Features &nbsp;&nbsp;<Button color="success" variant='contained' sx={{ p: 0 }}>New</Button></Link>
              <Link underline="hover">Tutorials</Link>
              <Link underline="hover">Pricing</Link>
              <Link underline="hover">Releases</Link>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>Company</Typography>
              <br />
              <Link underline="hover">About Us</Link>
              <Link underline="hover">Press</Link>
              <Link underline="hover">Careers</Link>
              <Link underline="hover">Contact Us</Link>
              <Link underline="hover">Partners</Link>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>Legal</Typography>
              <br />
              <Link underline="hover">Cookies Policy</Link>
              <Link underline="hover">Privacy Policy</Link>
              <Link underline="hover">Terms of Service</Link>
              <Link underline="hover">Law Enforcement</Link>
              <Link underline="hover">Status</Link>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>Follow Us</Typography>
              <br />
              <Link underline="hover">Facebook</Link>
              <Link underline="hover">Twitter</Link>
              <Link underline="hover">Dribble</Link>
              <Link underline="hover">Instagram</Link>
              <Link underline="hover">LinkedIn</Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <Box sx={{ textAlign: 'center' }}>
        <img src="https://kheloindia.gov.in/public/dist/img/logo.jpg" alt="logo" />
        <br />
        <br />
        <Typography variant="body2" gutterBottom>© 2022 Khelo India. All rights reserved</Typography>
      </Box>
    </Box >
  )
}

export default Footer