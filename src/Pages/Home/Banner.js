import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className='bg-cover bg-center ' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero min-h-screen md:px-12 px-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='md:mr-4'>
                        <h1 className="text-5xl font-bold font-mono">Your New Smile Starts Here</h1>
                        <p className="py-6 md:mr-6 font-serif">Welcome to our doctors portal website. Here we are services all types of doctors helps. We are ready for service our patient 24/7 days. If you have any problem please contact us. We are here to service you. Hope we will satisfied you.</p>
                        <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;