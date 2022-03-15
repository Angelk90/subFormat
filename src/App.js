import React from "react";
import PropTypes from "prop-types";
import { Route, Link, useLocation, Routes } from "react-router-dom";
import { Copy, Error } from "./page";

import DarkModeToggle from "react-dark-mode-toggle";
import "./styles/main.css";
import "./App.css";
import {
  AppBar,
  Box,
  Chip,
  createTheme,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  useTheme
} from "@mui/material";
import { GTranslate, Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { blue, grey } from "@mui/material/colors";

const drawerWidth = 240;

const AppInner = ({ mobileOpen, darkState, setState, pathname, container }) => {
  const handleDrawerToggle = () =>
      setState((prev) => ({ ...prev, mobileOpen: !mobileOpen }));
  const changePage = (page) => setState((prev) => ({ ...prev, page }));
  const handleThemeChange = React.useCallback(() => {
    localStorage.setItem("dark", !darkState);
    setState((prev) => ({ ...prev, darkState: !prev.darkState }));
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("lg")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        display: "none"
      },
      backgroundColor: darkState ? grey[900] : blue[500]
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      color: "#ffffff",
      backgroundColor: darkState ? grey[900] : blue[500]
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: !darkState ? grey[50] : grey[800]
    }
  }));

  const classes = useStyles();
  const theme = useTheme();

  const menu = [{ title: "Copy Srt", path: "docx", icon: <GTranslate /> }];

  const routeObj = [
    { path: "/", obj: <Copy darkState={darkState} /> },
    { path: "copy", obj: <Copy darkState={darkState} /> }
  ];

  const drawer = (
      <div className="mt-32">
        <div className={classes.toolbar} />
        <List>
          {menu.map(({ title, path, icon, badge }, index) => (
              <Link to={`/${path}`} key={title}>
                <ListItem button key={title} onClick={() => changePage(path)}>
                  <ListItemIcon
                      style={{ color: path === pathname ? "#ffffff" : "#ffffff80" }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                      primary={<span className="font-bold">{title}</span>}
                      style={{ color: path === pathname ? "#ffffff" : "#ffffff80" }}
                  />
                  {badge && (
                      <Chip
                          label={badge}
                          size="small"
                          color="secondary"
                          className="font-bold"
                          style={{ color: "#ffffff" }}
                      />
                  )}
                </ListItem>
              </Link>
          ))}
        </List>
      </div>
  );

  return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` }
            }}
            className={classes.appBar}
            style={{
              backgroundColor: darkState ? grey[800] : grey[50],
              boxShadow: "none"
            }}
        >
          <Toolbar className={"shadow-none"}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
                className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <div className="ml-auto text-right flex">
              <DarkModeToggle
                  onChange={handleThemeChange}
                  checked={darkState}
                  size={60}
              />
            </div>
          </Toolbar>
        </AppBar>
        {false && <>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: darkState ? grey[900] : blue[500]
                }
              }}
          >
            {drawer}
          </Drawer>
          <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: darkState ? grey[900] : blue[500]
                }
              }}
              open
          >
            {drawer}
          </Drawer>
        </Box></>}

        <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
                height: '100vh',
                backgroundColor: darkState ? grey[800] : grey[50],
            }}
        >
          <Toolbar />
          <Routes>
            {routeObj.map(({ path, obj }, key) => (
                <Route exact path={`/${path}`} element={obj} key={key} />
            ))}
            <Route path={`/lib`} element={() => <div>Hi!</div>} />
            <Route element={() => <Error darkState={darkState} />} />
          </Routes>
        </Box>
      </Box>
  );
};

function App(props) {
  const { wind } = props;
  const container = wind !== undefined ? () => wind().document.body : undefined;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const localDark = localStorage.getItem("dark");
  const isDark = localDark === null ? prefersDark : localDark === "true";

  let location = useLocation();
  let pathname = location.pathname.replace("/", "");
  if (pathname === "") pathname = "docx";

  const [state, setState] = React.useState({
    mobileOpen: false,
    darkState: isDark
  });
  const { mobileOpen, darkState } = state;

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? grey[900] : blue[500];
  const mainSecondaryColor = darkState ? grey[800] : blue[300];
  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  return (
      <ThemeProvider theme={darkTheme}>
        <AppInner {...{ mobileOpen, darkState, setState, pathname, container }} />
      </ThemeProvider>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  wind: PropTypes.func
};

export default App;
/*

 */
