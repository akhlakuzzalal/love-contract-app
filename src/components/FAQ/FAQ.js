import { Grid } from '@mui/material';
import React from 'react';
import faqImg from '../../img/faq.png'
import four from '../../img/love-point/love4.png'
import './FAQ.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import NestedAccordion from '../Nested-Accordion/Nested-Accordion'

const FAQ = () => {
    return (
      <div className='container'>
         <div className="setion-title">
        <img width={'50px'} src={four} alt="" />
        <h1 className='border'>FAQ</h1>
        </div>
      
   <Grid container spacing={2}>
     
   
       <Grid item xs={12} md={6}>
           
       <div className='acordion-border'>
      <Accordion className='acordion-border'  style={{background: 'transparent',  boxShadow: 'none'}}>
        <AccordionSummary 
         aria-controls="panel2a-content"
          >
          <Typography className='accordion-title'>Category 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <NestedAccordion></NestedAccordion>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{background: 'transparent', boxShadow: 'none'}}>
        <AccordionSummary
         aria-controls="panel2a-content" >
          <Typography className='accordion-title'>Category 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <NestedAccordion></NestedAccordion>
        </AccordionDetails>
      </Accordion>
     
      <Accordion  style={{background: 'transparent',  boxShadow: 'none'}}>
        <AccordionSummary
         aria-controls="panel2a-content" >
          <Typography className='accordion-title'>Category 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <NestedAccordion></NestedAccordion>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{background: 'transparent',  boxShadow: 'none'}}>
        <AccordionSummary
         aria-controls="panel2a-content" >
          <Typography className='accordion-title'>Category 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <NestedAccordion></NestedAccordion>
        </AccordionDetails>
      </Accordion>
    </div>
         
        
       </Grid>
       <Grid sx={{display:'flex',justifyContent:'center'}} item xs={12} md={6}>
          <img className='faq-img' width={'400px'} src={faqImg} alt=''/>
       </Grid>
   </Grid>
</div>
    );
};

export default FAQ;