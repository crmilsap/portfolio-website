import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 3,
    minHeight: 64,
  },

  menu: {
    position: 'absolute',
    right: 0,
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [dropdown, setDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMDScreen = useMediaQuery("(min-width: 600px)");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  if (dropdown !== isMDScreen) setDropdown(!dropdown);

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ minHeight: 64 }}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Cory Milsap
          </Typography>
          {dropdown && (
            <>
              <Button color="inherit">About</Button>
              <Button color="inherit">Experience</Button>
              <Button color="inherit">Proficiencies</Button>
              <Button color="inherit">Contact</Button>
            </>
          )}
          {!dropdown && (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={handleMenu}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                anchorEl = {anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                className = {classes.menu}
                onClose = {handleClose}
              >
                <MenuItem> About </MenuItem>
                <MenuItem> Experience </MenuItem>
                <MenuItem> Proficiencies</MenuItem>
                <MenuItem> Contact</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
