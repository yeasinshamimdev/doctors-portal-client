import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 py-8'>
            <InfoCard key={1} img={clock} />
            <InfoCard key={2} img={marker} />
            <InfoCard key={3} img={phone} />
        </div>
    );
};

export default Info;