import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tenders",
    link: "/get-started",
  },
  {
    name: "Notifications",
    link: "#",
  },
  {
    name: "Profile",
    link: "#",
  },
  {
    name: "Proponent Dashboard",
    link: "/proponent/signin",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <RouterLink to={page.link} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center" >{page.name}</Typography>
                  </RouterLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <RouterLink to={page.link} style={{ textDecoration: 'none' }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </RouterLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button href="/proponent/signin" variant="contained" color='success'  style={{borderRadius: '20px'}}>
              Log In
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }} padding="20px">
            <Button href="/proponent/signup" variant="contained" style={{backgroundColor : "#fff", color : "#000", borderRadius: '20px', height: '33px'}}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
