import React from 'react';
import certificate from '../../img/preview1.png'

const Preview = () => {
    return (
        <div>
            <h1>Preview</h1>
            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <img width={'800px'} src={certificate} alt="" />
            </div>
        </div>
    );
};

export default Preview;