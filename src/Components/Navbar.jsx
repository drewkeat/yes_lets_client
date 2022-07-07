import React, { useState } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  const pages = ["Friends", "New Availability"];
  const navMap = {
    Friends: "/friends",
    "New Availability": "/new-availability",
    Account: "/account",
    Dashboard: "/dashboard",
    Logout: "/",
  };
  const settings = ["Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    let path = event.target.getAttribute("path") || null;
    path && navigate(path);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    let path = event.target.parentElement.getAttribute("path") || null;
    if (path) {
      navigate(path);
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="secondary" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "start",
            }}
            path="/dashboard"
            onClick={handleCloseNavMenu}
          >
            <EventAvailableIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "white",
              }}
              path="/dashboard"
              onClick={handleCloseNavMenu}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              path="/dashboard"
              onClick={handleCloseNavMenu}
              sx={{
                // mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Yes, Let's
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ alignSelf: "start", color: "white" }}
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
                <MenuItem
                  key={page}
                  path={navMap[page]}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    textAlign="center"
                    path={navMap[page]}
                    onClick={handleCloseNavMenu}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <EventAvailableIcon
            sx={{ display: { xs: "flex", md: "none", color: "white" }, mr: 1 }}
            path="/dashboard"
            onClick={handleCloseNavMenu}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            path="/dashboard"
            onClick={handleCloseNavMenu}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 0,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Yes, Let's
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                path={navMap[page]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: { xs: 1, md: 0 },
              ml: 5,
              justifyContent: "end",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Drew Keat" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  path={navMap[setting]}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

  // return (
  //   <AppBar color="secondary" position="static">
  //     <Container maxWidth="xl">
  //       <Toolbar>
  //         <EventAvailableIcon fontSize="large" sx={{ color: "white" }} />
  //         <Typography
  //           variant="h6"
  //           sx={{
  //             display: { xs: "none", md: "block" },
  //             color: "white",
  //             mx: "1rem",
  //           }}
  //         >
  //           YES, LET'S
  //         </Typography>

  //         <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //           <IconButton
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="inherit"
  //             sx={{ color: "white", alignSelf: "center" }}
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: "bottom",
  //               horizontal: "left",
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: "top",
  //               horizontal: "left",
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: "block", md: "none" },
  //             }}
  //           >
  //             {pages.map((page) => (
  //               <MenuItem key={page} onClick={handleCloseNavMenu}>
  //                 <Typography textAlign="center">{page}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
  // return (
  //   <div>
  //     <ul style={{ listStyle: "none", margin: "auto", textAlign: "center" }}>
  //       <li style={listItemStyles} onClick={() => navigate("/dashboard")}>
  //         Dashboard
  //       </li>
  //       <li style={listItemStyles} onClick={() => navigate("/account")}>
  //         Account
  //       </li>
  //       <li style={listItemStyles} onClick={() => navigate("/friends")}>
  //         Friends
  //       </li>
  //       <li
  //         style={listItemStyles}
  //         onClick={() => navigate("/new-availability")}
  //       >
  //         Create Availability
  //       </li>
  //     </ul>
  //   </div>
  // );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
