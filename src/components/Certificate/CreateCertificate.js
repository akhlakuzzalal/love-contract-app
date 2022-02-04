import { Grid, TextField } from '@mui/material';
import React from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import createImg from '../../img/certificate.png'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const CreateCertificate = () => {
    return (
        <div>
            <div className="setion-title">
            <h1 className='border'>Create Certificate</h1>
            </div>

            <Grid container spacing={2}>
            <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>
                   <img className='section-img' width={'400px'} src={createImg} alt=''/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span>First Name</span></h6>} variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span>Last Name</span></h6>} variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span>First Name</span></h6>} variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><CallIcon/> <span>Contact</span></h6>} variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><MailOutlineIcon/> <span>Email Address</span></h6>} variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><HttpsOutlinedIcon/> <span>Password</span></h6>} variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><HttpsOutlinedIcon/> <span>Confirm Password</span></h6>} variant="outlined" />
                    <div className='btn-wrapper ms-4 mt-3'>
                        <button className='upload-btn'><FileUploadOutlinedIcon/> Upload Image</button>
                        <input required accept='image/*' type="file" placeholder='Image' />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreateCertificate;