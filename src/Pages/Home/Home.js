import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <DentalCare />
            <MakeAppointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;