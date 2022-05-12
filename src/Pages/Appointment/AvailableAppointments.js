import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h1 className='md:text-2xl text-xl text-center text-secondary my-8'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-20 gap-4 md:gap-8 px-4 md:px-0'>
                {
                    services.map(service => <Service key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;