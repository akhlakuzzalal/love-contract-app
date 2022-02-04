import { Grid } from '@mui/material';
import React from 'react';
import faqImg from '../../img/faq.png'
import four from '../../img/love-point/love4.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import NestedAccordion from '../Nested-Accordion/Nested-Accordion'

const FAQ = () => {
    return (
      <div className='container'>
      <h1 style={{display:"flex",alignItems:'center',lineHeight:0}}><span style={{marginRight:'15px'}}><img width={'50px'} src={four} alt="" /></span>FAQ</h1>
   <Grid container spacing={2}>
     
   
       <Grid item xs={6}>
           
       <div>
     
      <Accordion  style={{background: 'transparent',  boxShadow: 'none'}}>
        <AccordionSummary
         aria-controls="panel2a-content" >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <NestedAccordion></NestedAccordion>
        </AccordionDetails>
      </Accordion>
      <hr style={{}}/>

     
     
     
      {/* borderBottom: '1px solid #fff', */}
    </div>
         
        
       </Grid>
       <Grid sx={{display:'flex',justifyContent:'center'}} item xs={6}>
          <img className='section-img' width={'400px'} src={faqImg} alt=''/>
       </Grid>
   </Grid>
</div>
    );
};

export default FAQ;