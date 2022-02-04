import {Grid,  } from '@mui/material';
import React from 'react';
import payImg from '../../img/payment.png'
import third from '../../img/love-point/love3.png'
import StarRateIcon from '@mui/icons-material/StarRate';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {BsCurrencyBitcoin} from 'react-icons/bs';


import './Payment.css'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Payment = () => {
    return (
         <div className="container">
             
        <div className="setion-title">
        <img width={'50px'} src={third} alt="" />
        <h1 className='border'>Payment</h1>
        </div>
         <Grid container spacing={2}>
                <Grid item xs={6}>
                <div className="pay-item">
                    <p><CreditCardIcon/> Pay with Credit</p>
                    <FormControl className='radio-red'>
                         <RadioGroup
                           aria-labelledby="demo-radio-buttons-group-label"
                           defaultValue="female"
                           name="radio-buttons-group"
                         >
                           <FormControlLabel value="love" control={<Radio />} label="" />
                         </RadioGroup>
                        </FormControl>
                </div>
                <div className="pay-item">
                    <p><BsCurrencyBitcoin className='bit-icon'/>Pay with Crypto</p>
                    <FormControl className='radio-red'>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="" />
                        </RadioGroup>
                    </FormControl>
                </div>
                
                </Grid>
                <Grid item xs={6}>
                     <img className='mt-80' width={'380px'} src={payImg} alt=''/>
                </Grid>
            </Grid>
         <Grid  container spacing={2}>
                <Grid item xs={6}>
                <div className="pay-lf-btn">
                    <p className='pay-lf-item'><CreditCardIcon/>Pay with Credit instractions</p>
                </div>
                <ul className='ml'>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                   
                   
                </ul>
                </Grid>
                <Grid  item xs={6}>
                <div className="pay-rf-btn ">
                    <p className='pay-lf-item'><AccountBalanceWalletIcon/>Connect your Wallet</p>
                </div>
                <ul className='ml'>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className='pay-list ml'> <StarRateIcon className='star-icon'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
                </Grid>
            </Grid>
         </div>
    );
};

export default Payment;