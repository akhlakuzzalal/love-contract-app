import { Grid } from '@mui/material';
import React from 'react';
import payImg from '../../img/payment.png'

const Payment = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1>Payment</h1>
                </Grid>
                <Grid item xs={6}>
                     <img width={'380px'} src={payImg} alt=''/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Payment;