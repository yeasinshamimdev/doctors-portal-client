import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-0 pt-5 px-4">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-400'>Try another date</span>
                    }
                </p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} </p>
                <div className="card-actions justify-center mt-4 mb-3">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} className="btn btn-secondary text-white uppercase">book Available</label>
                </div>
            </div>
        </div>
    );
};

export default Service;