import React from 'react';
import banner from '../../img/banner-bg.png'
import './banner.css'
import cloud from '../../img/cloud.png'

const Banner = () => {
    return (
        <div className='container'>
            <img width={'100%'} src={banner} alt='banner'/>
            <div className='banner-cloud'>
                <img className='banner-img' src={cloud} alt="" />
                <p className="banner-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem fugit nam voluptate praesentium labore ducimus, illum quae laboriosam quasi, optio cupiditate corrupti. Pariatur atque in temporibus velit quasi architecto aliquid, sunt iusto sapiente, reprehenderit ratione animi iste voluptate minus nihil, quos officiis recusandae enim sint praesentium cumque laboriosam beatae.
                </p>
            </div>
        </div>
    );
};

export default Banner;