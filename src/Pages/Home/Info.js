import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const infoCardAssets = [
        { id: 1, img: { clock }.clock, title: "Opening Hours", info: "Lorem Ipsum is simply dummy text of the pri", bgClass: "bg-gradient-to-r from-secondary to-primary" },
        { id: 2, img: { marker }.marker, title: "Visit our location", info: "Brooklyn, NY 10036, United States", bgClass: "bg-accent" },
        { id: 3, img: { phone }.phone, title: "Contact us now", info: "+000 123 456789", bgClass: "bg-gradient-to-r from-secondary to-primary" }
    ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 py-8'>
            {
                infoCardAssets.map(cardAssets => <InfoCard key={cardAssets.id} img={cardAssets.img} title={cardAssets.title} info={cardAssets.info} bgClass={cardAssets.bgClass} />)
            }
        </div>
    );
};

export default Info;