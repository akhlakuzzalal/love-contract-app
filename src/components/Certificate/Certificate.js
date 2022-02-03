import { Grid } from '@mui/material';
import React from 'react';
import alignmentImg from '../../img/alignment.png'

const Certificate = () => {
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <h1>Certificate &amp; Alignment</h1>
            </Grid>
            <Grid item xs={6}>
                <img src={alignmentImg} alt=''/>
            </Grid>
        </Grid>
        </div>
    );
};

export default Certificate;