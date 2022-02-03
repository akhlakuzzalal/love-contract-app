import React from 'react';
import Banner from '../Banner/Banner';
import Instraction from '../Instraction/Instraction';
import Certificate from '../Certificate/Certificate';
import ContactUs from '../ContactUs/ContactUs';
import Payment from '../Payment/Payment';
import FAQ from '../FAQ/FAQ';

const FullPage = () => {
    return (
        <div>
            <Banner></Banner>
            <Instraction></Instraction>
            <Certificate></Certificate>
            <Payment></Payment>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
        </div>
    );
};

export default FullPage;