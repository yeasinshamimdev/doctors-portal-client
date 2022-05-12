import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="md:max-w-md rounded-lg shadow-md" alt='chair' />
                <div className='md:mr-28 shadow-lg mt-6 md:mt-0 p-4 rounded-lg'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;