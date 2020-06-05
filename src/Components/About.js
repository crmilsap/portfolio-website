import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    aboutContainer: {
        margin: '100px 0px 100px 0px',
    },
});

export default function About() {

    const classes = useStyles();
    return (
        <div className = {classes.aboutContainer}>
            <Typography variant = 'h1'>
                About this Site
            </Typography>
            <Typography variant = 'p'>
                Welcome!<br/><br/>
                This site serves as an online portfolio for my academic
                and professional endeavors. My name is Cory Milsap originally from Kansas City, KS. I am a rising junior
                studying Computer Science at the University of Alabama. Feel free to browse the site to see what I am involved in or working on.
                <br/><br/>
                 Thanks for visiting!
                 <br/>
                 Cory
            </Typography>
        </div>
    );
}