import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const [login, setLogin] = React.useState(false);

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const navItems = [
    {
      name: "List View",
      icon: <InboxIcon />,
      link: `/admin/list`,
    },
    {
      name: "Comparison",
      icon: <MailIcon />,
      link: "/admin/comparison",
    },
    {
      name: "Analytics",
      icon: <InboxIcon />,
      link: "/admin/analytics",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {login ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ""
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          {login ? (
            <>
              <Button
                color="inherit"
                variant="outlined"
                href="post/tender"
                sx={{ m: 2 }}
              >
                Post a Tender
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => setLogin(!login)}
                sx={{ m: 2 }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => setLogin(!login)}
              sx={{ m: 2 }}
            >
              Login
            </Button>
          )}
        </Toolbar>
        <>
          <SwipeableDrawer
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
              sx={{
                width: "left" === "top" || "left" === "bottom" ? "auto" : 250,
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Typography variant="h5" gutterBottom sx={{ m: 2 }}>
                {" "}
                Navigation
              </Typography>
              <Divider />
              <List sx={{ mt: 3 }}>
                {navItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <Link
                      to={item.link}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Divider />
              {/* <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List> */}
            </Box>
          </SwipeableDrawer>
        </>
      </AppBar>
    </Box>
  );
}
