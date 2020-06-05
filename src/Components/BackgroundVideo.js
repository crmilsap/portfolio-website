import React from 'react'
import campusVid from './../Assets/campus.mp4'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  video: {
    zIndex: -1,
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    minWidth: '100%',
    minHeight: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
})
export default function BackgroundVideo() {
  const classes = useStyles();

    return (
      <video  loop autoPlay muted className = {classes.video}>
        <source src= { campusVid } type="video/mp4" />Your browser does not support the video tag.
      </video>
    );
}