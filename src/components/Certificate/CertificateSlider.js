import React from 'react';
import  InfiniteCarousel  from 'react-leaf-carousel';
import img1 from '../../img/preview1.png'
import img2 from '../../img/preview2.png'
import img3 from '../../img/preview3.png'
import img4 from '../../img/preview4.png'

const CertificateSlider = () => {
    return (
        <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div className='slider-img'>
      <img
        alt=''
        src={img1}
      />
    </div>
    <div className='slider-img'>
      <img
        alt=''
        src={img2}
      />
    </div>
    <div className='slider-img'>
      <img
        alt=''
        src={img3}
      />
    </div>
    <div className='slider-img'>
      <img
        alt=''
        src={img4}
      />
    </div>
    <div className='slider-img'>
      <img
        alt=''
        src={img1}
      />
    </div>
  </InfiniteCarousel>
    );
};

export default CertificateSlider;