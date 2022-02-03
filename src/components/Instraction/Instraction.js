import { Grid } from '@mui/material';
import React from 'react';
import instractionImg from '../../img/instraction.png'
import './instraction.css'
import first from '../../img/love-point/love1.png'

const Instraction = () => {
    return (
        <div className='container'>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <h1 style={{display:"flex",alignItems:'center',lineHeight:0}}><span style={{marginRight:'15px'}}><img width={'50px'} src={first} alt="" /></span> Instraction</h1>
                <ul>
                    <li className='instract-item'>Unlimited Likes</li>
                    <li className='instract-item'>See who likes you</li>
                    <li className='instract-item'>Match Anywhere</li>
                    <li className='instract-item'>Additional matches</li>
                    <li className='instract-item'>Rewind features</li>
                    <li className='instract-item'>Data setup features</li>
                </ul>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:'center'}} item xs={6}>
                <img width={'400px'} src={instractionImg} alt=''/>
            </Grid>
        </Grid>
        </div>
    );
};

export default Instraction;