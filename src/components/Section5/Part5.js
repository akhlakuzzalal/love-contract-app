import { Grid } from '@mui/material';
import React from 'react';
import contactImg from '../../img/contact.png';

const Part5 = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h1>Contact me</h1>
            </Grid>
            <Grid item xs={6}>
                <img src={contactImg} alt=''/>
            </Grid>
        </Grid>
    );
};

export default Part5;