import { Grid, MenuItem, TextField} from '@mui/material';
import React from 'react';
import contactImg from '../../img/contact.png';
import './ContactUs.css'
import fifth from '../../img/love-point/love5.png'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChatIcon from '@mui/icons-material/Chat';


const ContactUs = () => {
    const [currency, setCurrency] = React.useState('Love');

    const currencies = [
        {
          value: `'Love'`,
          label: <h6 className='lebel-drop-icon'><PersonOutlinedIcon className='drop-lebel-margin'/> <span>Name</span></h6>,
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
            <h1 style={{display:"flex",alignItems:'center',lineHeight:0}}><span style={{marginRight:'15px'}}><img width={'50px'} src={fifth} alt="" /></span> Contact Us</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <div className='contact-us-input-container'>
                    <h5>Your name</h5>
                    <TextField className='contact-us-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span>Name</span></h6>} variant="outlined" />
                </div>
                <div className='contact-us-input-container'>
                    <h5>Email</h5>
                    <TextField className='contact-us-input' id="outlined-basic" label={<h6 className='lebel-icon'><PersonOutlinedIcon/> <span>Name</span></h6>} variant="outlined" />
                </div>
                <div className='contact-us-input-container'>
                    <h5>Contact reason</h5>
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
                <h5>Message</h5>
                <TextField
                    className='contact-message'
                    id="outlined-multiline-static"
                    label={<h6 className='lebel-icon'><ChatIcon/> <span>Message</span></h6>}
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