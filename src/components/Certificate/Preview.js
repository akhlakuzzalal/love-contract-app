import React from 'react';
import certificate from '../../img/preview1.png'

const Preview = () => {
    return (
        <div>
            <div className="setion-title">
            <h1 className='border'>Preview</h1>
            </div>
            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <img id='preview-img' width={'800px'} src={certificate} alt="" />
            </div>
        </div>
    );
};

export default Preview;