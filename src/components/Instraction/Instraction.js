import { Grid } from '@mui/material';
import React from 'react';
import instractionImg from '../../img/instraction.png'
import './instraction.css'
import first from '../../img/love-point/love1.png'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const Instraction = () => {
    return (
        <div className='container'>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <h1 style={{display:"flex",alignItems:'center',lineHeight:0}}><span style={{marginRight:'15px'}}><img width={'50px'} src={first} alt="" /></span> Instraction</h1>
                <ul>
                    <li className='inserted-style'><span className='cheakbox-icon'><CheckBoxOutlinedIcon/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><CheckBoxOutlinedIcon/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><CheckBoxOutlinedIcon/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><CheckBoxOutlinedIcon/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><CheckBoxOutlinedIcon/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><CheckBoxOutlinedIcon/></span><span className='instract-item'>Unlimited Likes</span></li>
                </ul>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>
                <img width={'400px'} src={instractionImg} alt=''/>
            </Grid>
        </Grid>
        </div>
    );
};

export default Instraction;