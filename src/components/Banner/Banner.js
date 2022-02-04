import React from 'react';
import banner from '../../img/banner-bg.png'
import './banner.css'
import cloud from '../../img/cloud.png'
import { BsSkype } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className='container banner-area'>
            <div className='icon-container'>
                <AiOutlineYoutube className='banner-icon'/>
                <AiOutlineInstagram className='banner-icon'/>
                <AiFillFacebook className='banner-icon'/>
                <BsSkype className='banner-icon'/>
            </div>
            <img width={'100%'} src={banner} alt='banner'/>
            <div className='banner-cloud'>
                <img className='banner-img section-img' src={cloud} alt="" />
                <p className="banner-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem fugit nam voluptate praesentium labore ducimus, illum quae laboriosam quasi, optio cupiditate corrupti. Pariatur atque in temporibus velit quasi architecto aliquid, sunt iusto sapiente, reprehenderit ratione animi iste voluptate minus nihil.
                </p>
            </div>
        </div>
    );
};

export default Banner;