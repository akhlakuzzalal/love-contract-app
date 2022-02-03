import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import contactImg from '../../img/contact.png';
// import { styled } from "@mui/system";
import './ContactUs.css'
import { AccountCircle } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';
import { borderRadius, style } from '@mui/system';

// const TextFieldStyled = styled(TextField)({

// })
const ContactUs = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h1>Contact Us</h1>
                <hr />
                <TextField
                    style={{background: '#fff', borderRadius: '10px', outline: '0', border: 'none'}}
                    id="outlined-basic"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start"   style={{ outline: '0', border: 'none'}}>
                        <AccountCircle />
                        <TextField id="input-with-sx" label="With sx" variant="standard" />
                        {/* <Typography ml={2}  variant='p' component="p"></Typography> */}
                        </InputAdornment>
                    ),
                    }}
        variant="outlined"
      />
            </Grid>
            <Grid item xs={6}>
                <img src={contactImg} alt=''/>
            </Grid>
        </Grid>
    );
};

export default ContactUs;