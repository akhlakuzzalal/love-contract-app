import { Grid } from '@mui/material';
import React from 'react';
import instractionImg from '../../img/instraction.png'
import './instraction.css'
import first from '../../img/love-point/love1.png'
import {BsCheck2Square} from 'react-icons/bs';

const Instraction = () => {
    return (
        <div className='container'>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <div className="setion-title">
        <img width={'50px'} src={first} alt="" />
        <h1 className='border' >Instraction</h1>
        </div>
                <ul>
                    <li className='inserted-style'><span className='cheakbox-icon'><BsCheck2Square className='icon'/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><BsCheck2Square className='icon'/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><BsCheck2Square className='icon'/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><BsCheck2Square className='icon'/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><BsCheck2Square className='icon'/></span><span className='instract-item'>Unlimited Likes</span></li>
                    <li className='inserted-style'><span className='cheakbox-icon'><BsCheck2Square className='icon'/></span><span className='instract-item'>Unlimited Likes</span></li>
                </ul>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>
                <img className='section-img' width={'400px'} src={instractionImg} alt=''/>
            </Grid>
        </Grid>
        </div>
    );
};

export default Instraction;