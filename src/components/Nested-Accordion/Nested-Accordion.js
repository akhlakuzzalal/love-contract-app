import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Nested-Accordion.css'

const NestedAccordion = () => {
    return (
        <div className='acordion-border-active' style={{marginLeft: '30px'}}>
        <Accordion style={{background: 'transparent', boxShadow: 'none'}}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
            aria-controls="panel1a-content"
          >
            <Typography style={{color: 'white'}}> What is Contract of Love?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad nam tenetur laboriosam rem aliquid exercitationem fugiat tempore eum repellat 
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{background: 'transparent', boxShadow: 'none'}}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
            aria-controls="panel2a-content"
          >
            <Typography style={{color: 'white'}}>What is CL?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad nam tenetur laboriosam rem aliquid exercitationem fugiat tempore eum repellat.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{background: 'transparent', boxShadow: 'none'}}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
            aria-controls="panel2a-content"
          >
            <Typography style={{color: 'white'}}>Why is Contract of Love used?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accordion-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad nam tenetur laboriosam rem aliquid exercitationem fugiat tempore eum repellat 
            </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>
    );
};

export default NestedAccordion;