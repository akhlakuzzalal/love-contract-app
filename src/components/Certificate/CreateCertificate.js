import { Grid, TextField } from '@mui/material';
import React from 'react';
import createImg from '../../img/certificate.png'

const CreateCertificate = () => {
    return (
        <div>
            <h1>Create Certificate</h1>
            <Grid container spacing={2}>
            <Grid sx={{display:'flex',justifyContent:'center'}} item xs={6}>
                   <img width={'400px'} src={createImg} alt=''/>
                </Grid>
                <Grid item xs={6}>
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField className='certificate-input' id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
            </Grid>
        </div>
    );
};

export default CreateCertificate;