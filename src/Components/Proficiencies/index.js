import React from 'react';
import VerticalTab from './VerticalTab';
import {Grid} from '@material-ui/core'


export default function Proficiencies() {

    return (
        <Grid 
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