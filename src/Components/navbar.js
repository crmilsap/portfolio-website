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


const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 100,
    left: 0,
    behavior: "smooth",
  });


export default function ButtonAppBar(props) {
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

  const handleScrollToAbout = () => scrollToRef(props.aboutRef)
  const handleScrollToExperience = () => scrollToRef(props.experienceRef)
  const handleScrollToProficiencies = () => scrollToRef(props.proficienciesRef)
  const handleScrollToContact = () => scrollToRef(props.contactRef)

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
              <Button color="inherit" onClick = {handleScrollToAbout}>About</Button>
              <Button color="inherit" onClick = {handleScrollToExperience}>Experience</Button>
              <Button color="inherit" onClick = {handleScrollToProficiencies}>Proficiencies</Button>
              <Button color="inherit" onClick = {handleScrollToContact}>Contact</Button>
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
                <MenuItem onClick = {handleScrollToAbout}> About </MenuItem>
                <MenuItem onClick = {handleScrollToExperience}> Experience </MenuItem>
                <MenuItem onClick = {handleScrollToProficiencies}> Proficiencies</MenuItem>
                <MenuItem onClick = {handleScrollToContact}> Contact</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
