import { Grid, TextField} from '@mui/material';
import React from 'react';
import contactImg from '../../img/contact.png';
import './ContactUs.css'
import fifth from '../../img/love-point/love5.png'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const ContactUs = () => {
    return (
        <div className='container'>
                <div className="setion-title">
                <img width={'50px'} src={fifth} alt="" />
            <h1 className='border'>Contact Us</h1>
            </div>
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span>Name</span></h6>} variant="outlined" />
                <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><MailOutlineIcon/> <span>Email</span></h6>} variant="outlined" />
                <TextField className='certificate-input' id="outlined-basic" label={<h6 className='lebel-icon'><MailOutlineIcon/> <span>Select</span></h6>} variant="outlined" />
                <TextField
                    className='contact-message'
                    id="outlined-multiline-static"
                    label={<h6 className='lebel-icon'><ChatIcon/> <span>Message</span></h6>}
                    multiline
                    rows={5}
                />
                </Grid>
                <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>
                   <img className='section-img' width={'400px'} src={contactImg} alt=''/>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactUs;