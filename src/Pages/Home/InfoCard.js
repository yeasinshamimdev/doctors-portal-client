import React from 'react';

const InfoCard = ({ img, title, info, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl px-6 ${bgClass} pt-4 md:pt-0`}>
            <figure><img className='w-10 md:w-14' src={img} alt="Album" /></figure>
            <div className="card-body text-white p-4 md:p-9">
                <h2 className="card-title">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default InfoCard;