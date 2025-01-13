import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Button,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import DirectoryIcon from "@mui/icons-material/Category";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Contact Us", path: "/contact", icon: <ContactsIcon /> },
    { label: "Matrimony", path: "/matrimony", icon: <PeopleIcon /> },
    { label: "Business", path: "/business", icon: <BusinessIcon /> },
    { label: "Directory", path: "/directory", icon: <DirectoryIcon /> },
    { label: "Gallery", path: "/gallery", icon: <PhotoLibraryIcon /> },
  ];

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#0d47a1" }}>
        <Toolbar>
          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
              fontWeight: "bold",
            }}
          >
            Dhandhar Panchal Seva Samaj
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
                startIcon={item.icon}
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={handleLoginLogout}
              sx={{
                color: "#fff",
                textTransform: "none",
                border: "1px solid white",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
              startIcon={isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
          </Box>

          {/* Hamburger Menu */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 300,
            height: "100%",
            backgroundColor: "#e3f2fd",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#1565c0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                letterSpacing: "0.05rem",
              }}
            >
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Divider />

          {/* Drawer Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                sx={{
                  "&:hover": {
                    backgroundColor: "#bbdefb",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem
              onClick={handleLoginLogout}
              sx={{
                "&:hover": {
                  backgroundColor: "#bbdefb",
                },
              }}
            >
              <ListItemIcon>
                {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
              </ListItemIcon>
              <ListItemText primary={isLoggedIn ? "Logout" : "Login"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
