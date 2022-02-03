import { FormControl, FormControlLabel,  Grid, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import alignmentImg from '../../img/alignment.png'
import CreateCertificate from './CreateCertificate';
import Preview from './Preview';
import './Certificate.css'
import second from '../../img/love-point/love2.png'

const Certificate = () => {
    return (
        <div className='container'>
          <h1 style={{display:"flex",alignItems:'center',lineHeight:0}}><span style={{marginRight:'15px'}}><img width={'50px'} src={second} alt="" /></span> Certificate &amp; Akignment</h1>
            <Grid container spacing={2}>
                <Grid  item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <FormControl>
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
                        <Grid item xs={6}>
                        <FormControl>
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
                <Grid sx={{display:'flex',justifyContent:'center'}} item xs={6}>
                   <img width={'400px'} src={alignmentImg} alt=''/>
                </Grid>
            </Grid>
            <CreateCertificate></CreateCertificate>
            <Preview></Preview>
        </div>
    );
};

export default Certificate;