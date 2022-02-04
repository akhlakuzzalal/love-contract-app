import { Grid, MenuItem, TextField} from '@mui/material';
import React from 'react';
import contactImg from '../../img/contact.png';
import './ContactUs.css'
import fifth from '../../img/love-point/love5.png'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChatIcon from '@mui/icons-material/Chat';


const ContactUs = () => {
    const [currency, setCurrency] = React.useState('select');

    const currencies = [
        {
          value: `select`,
          label: <h6 className='lebel-drop-icon'><PersonOutlinedIcon className='drop-lebel-margin'/> <span className='create-text'>Select One</span></h6>,
        },
        {
          value: 'EUR',
          label: <h6 className='lebel-drop-icon'><PersonOutlinedIcon className='drop-lebel-margin'/> <span>Name</span></h6>,
        },
        {
          value: 'BTC',
          label: <h6 className='lebel-drop-icon'><PersonOutlinedIcon className='drop-lebel-margin'/> <span>Name</span></h6>,
        },
        {
          value: 'JPY',
          label: <h6 className='lebel-drop-icon'><PersonOutlinedIcon className='drop-lebel-margin'/> <span>Name</span></h6>,
        },
      ];

    return (
        <div className='container'>
                <div className="setion-title">
                <img width={'50px'} src={fifth} alt="" />
            <h1 className='border'>Contact Us</h1>
            </div>
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <div className='contact-us-input-container'>
                    <h5 className='contact-title'>Your name</h5>
                    <TextField className='contact-us-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span  className='create-text'>Name</span></h6>} variant="outlined" />
                </div>
                <div className='contact-us-input-container'>
                    <h5 className='contact-title'>Email</h5>
                    <TextField className='contact-us-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span  className='create-text'>Email</span></h6>} variant="outlined" />
                </div>
                <div className='contact-us-input-container'>
                    <h5 className='contact-title'>Contact Reason</h5>
                    <TextField
                        id="outlined-select-currency"
                        className='contact-us-input'
                        select
                        value={currency}
                      
                        onChange={(event)=>setCurrency(event.target.value)}
                        
                    >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                     </TextField>
                </div>
                <div className='contact-us-input-container'>
                <h5 className='contact-title'>Message</h5>
                <TextField
                    className='contact-message'
                    id="outlined-multiline-static"
                    label={<h6 className='lebel-icon'><ChatIcon/> <span  className='create-text'>Message</span></h6>}
                    multiline
                    rows={5}
                />
                </div>
                </Grid>
                <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>
                   <img className='section-img' width={'400px'} src={contactImg} alt=''/>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactUs;