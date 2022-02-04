import {Grid,  } from '@mui/material';
import React from 'react';
import payImg from '../../img/payment.png'
import third from '../../img/love-point/love3.png'
import StarRateIcon from '@mui/icons-material/StarRate';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './Payment.css'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Payment = () => {
    return (
         <div className="container">
         <h1 style={{display:"flex",alignItems:'center',lineHeight:0}}><span style={{marginRight:'15px'}}><img width={'50px'} src={third} alt="" /></span>Payment</h1>
         <Grid container spacing={2}>
             
                <Grid item xs={6}>
                <div className="pay-item">
                
                    <p><CreditCardIcon/> Pay with Credit</p>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                    
               
                </div>
                    
                    {/* <li className='pay-item'>Pay with Crypto</li> */}
                
                </Grid>
                <Grid item xs={6}>
                     <img width={'380px'} src={payImg} alt=''/>
                </Grid>
            </Grid>
         <Grid container spacing={2}>
                <Grid item xs={6}>
                    
                <ul>
                    <p className='pay-lf-btn'> <CreditCardIcon /> Pay with Credit instractions</p>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                   
                   
                </ul>
                </Grid>
                <Grid item xs={6}>
                <ul>
                    <p className='pay-lf-btn pay-rf-btn'> <AccountBalanceWalletIcon />Connect your Wallet</p>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
                </Grid>
            </Grid>
         </div>
    );
};

export default Payment;