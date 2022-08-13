import React, { useEffect, useState } from "react";
import AdminAnalyticsView from "../components/AdminAnalyticsView";
import Card from "../components/CardAdmin";
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
import AdminListView from "../components/AdminListView";
import AdminCompareView from "../components/AdminCompareView";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import CompareIcon from "@mui/icons-material/Compare";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const AdminDashboard = () => {
  const [tenderValues, setTenderValues] = useState([]);
  const handleTenders = async () => {
    try {
      const res = await fetch("/API/tenderform", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = res.json();
      data.then((response) => {
        setTenderValues(response);
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleTenders();
  }, []);

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
      name: "Dashboard",
      icon: <HomeIcon />,
      comp: null,
    },
    {
      name: "List View",
      icon: <ListIcon />,
      comp: <AdminListView />,
    },
    {
      name: "Comparison",
      icon: <CompareIcon />,
      comp: <AdminCompareView />,
    },
    {
      name: "Analytics",
      icon: <AnalyticsIcon />,
      comp: <AdminAnalyticsView />,
    },
  ];

  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <>
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
                      <ListItemButton
                        onClick={() => {
                          setSelectedComponent(item.comp);
                        }}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </Box>
            </SwipeableDrawer>
          </>
        </AppBar>
      </Box>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <AdminAnalyticsView /> */}
        {selectedComponent !== null
          ? selectedComponent
          : tenderValues.map((tenderValue) => {
              return <Card key={tenderValue.tenderId} values={tenderValue} />;
            })}
      </div>
    </>
  );
};

export default AdminDashboard;
