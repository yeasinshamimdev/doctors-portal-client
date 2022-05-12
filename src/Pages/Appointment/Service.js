import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center p-10 px-4">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-400'>Try another date</span>
                    }
                </p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} </p>
                <div className="card-actions justify-center mt-2">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} className="btn btn-sm px-4 py-2 shadow-md btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;