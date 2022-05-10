import React from 'react';

const InfoCard = ({ img }) => {
    return (
        <div className="card lg:card-side shadow-xl px-6">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">Opening Hours</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;