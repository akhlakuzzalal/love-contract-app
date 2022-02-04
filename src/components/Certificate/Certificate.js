import { FormControl, FormControlLabel,  Grid, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import alignmentImg from '../../img/alignment.png'
import CreateCertificate from './CreateCertificate';
import Preview from './Preview';
import './Certificate.css'
import second from '../../img/love-point/love2.png'
import CertificateSlider from './CertificateSlider';

const Certificate = () => {
    return (
        <div className='container'>
                      <div className="setion-title">
                <img width={'50px'} src={second} alt="" />
                <h1 className='border'> Certificate &amp; Alignment</h1>
            </div>
          
            <Grid sx={{textAlign:'center',color:"#ffff"}} container spacing={2}>
                <Grid  item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <FormControl className='radio-btn'>
                         <RadioGroup
                           aria-labelledby="demo-radio-buttons-group-label"
                           defaultValue="female"
                           name="radio-buttons-group"
                         >
                           <FormControlLabel value="love" control={<Radio />} label="Love Certificate" />
                           <FormControlLabel value="marage" control={<Radio />} label="Marage Certificate" />
                           <FormControlLabel value="other" control={<Radio />} label="Other Certificate" />
                         </RadioGroup>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <FormControl className='radio-btn'>
                         <RadioGroup
                           aria-labelledby="demo-radio-buttons-group-label"
                           defaultValue="female"
                           name="radio-buttons-group"
                         >
                           <FormControlLabel value="love" control={<Radio />} label="Horizontal" />
                           <FormControlLabel value="marage" control={<Radio />} label="Verticle" />
                         </RadioGroup>
                        </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>
                   <img className='section-img' width={'400px'} src={alignmentImg} alt=''/>
                </Grid>
            </Grid>
            <CertificateSlider></CertificateSlider>
            <CreateCertificate></CreateCertificate>
            <Preview></Preview>
        </div>
    );
};

export default Certificate;