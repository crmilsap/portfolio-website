import React from 'react';
import VerticalTab from './VerticalTab';
import {Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    GridContainer: {
        marginTop: '80px',
    },
  }));


export default function Proficiencies() {


    const classes = useStyles();
    return (
        <Grid
        className = {classes.GridContainer} 
        container 
        direction = 'column'>
            <Grid item> 
                <h1> Proficiencies </h1>
            </Grid>
            <Grid item>
                <VerticalTab/>
            </Grid>
        </Grid>
    );
}