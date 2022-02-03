import { Grid } from '@mui/material';
import React from 'react';
import faqImg from '../../img/faq.png'

const FAQ = () => {
    return (
        <div>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h1>FAQ</h1>
            </Grid>
            <Grid item xs={6}>
                <img src={faqImg} alt=''/>
            </Grid>
        </Grid>
        </div>
    );
};

export default FAQ;