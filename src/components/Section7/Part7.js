import { Grid } from '@mui/material';
import React from 'react';

const Part7 = () => {
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <h1>1st grid</h1>
            </Grid>
            <Grid item xs={6}>
                <h1>2nd grid</h1>
            </Grid>
            </Grid>
        </div>
    );
};

export default Part7;