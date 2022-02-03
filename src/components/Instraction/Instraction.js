import { Grid } from '@mui/material';
import React from 'react';
import instractionImg from '../../img/instraction.png'

const Instraction = () => {
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <h1>Instraction</h1>
            </Grid>
            <Grid item xs={6}>
                <img src={instractionImg} alt=''/>
            </Grid>
        </Grid>
        </div>
    );
};

export default Instraction;