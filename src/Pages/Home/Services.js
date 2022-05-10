import React from 'react';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import fluoride from '../../assets/images/fluoride.png';
import Service from './Service';

const Services = () => {
    const services = [
        { _id: 1, img: { fluoride }.fluoride, name: "Fluoride Treatment", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
        { _id: 2, img: { cavity }.cavity, name: "Cavity Filling", description: "Lorem Ipsum is simply dummy printing and typesetting has been the" },
        { _id: 3, img: { whitening }.whitening, name: "Teeth Whitening", description: "Lorem Ipsum is simply dummy printing and typesetting Ipsum has been the" }
    ];

    return (
        <div className='md:pt-24 pt-14'>
            <h4 className='text-primary text-sm font-bold text-center mb-2'>OUR SERVICES</h4>
            <h1 className='text-center text-4xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 px-4 md:pt-14'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;