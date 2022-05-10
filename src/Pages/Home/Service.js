import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl md:mt-1 mt-6">
            <figure><img className='md:w-24 w-14 md:pt-8 pt-4' src={img} alt="Album" /></figure>
            <div className="card-body md:px-8 pt-8">
                <h2 className="text-center text-xl font-bold">{name}</h2>
                <p className='text-center'>{description}</p>
            </div>
        </div>
    );
};

export default Service;