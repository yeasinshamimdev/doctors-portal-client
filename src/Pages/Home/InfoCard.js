import React from 'react';

const InfoCard = ({ img, title, info, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl px-6 ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default InfoCard;