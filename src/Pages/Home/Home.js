import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <DentalCare />
            <MakeAppointment />
            <Testimonial />
        </div>
    );
};

export default Home;