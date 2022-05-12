import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-cover bg-center md:px-12" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <img src={chair} className="md:max-w-md rounded-lg shadow-2xl px-2" alt='' />
                <div className='md:mr-4 px-4'>
                    <h1 className="text-4xl md:text-5xl font-bold font-mono">Your New Smile Starts Here</h1>
                    <p className="py-6 md:mr-6 font-serif text-justify">Welcome to our doctors portal website. Here we are services all types of doctors helps. We are ready for service our patient 24/7 days. If you have any problem please contact us. We are here to service you. Hope we will satisfied you.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;