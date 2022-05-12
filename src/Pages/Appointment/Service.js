import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;

    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body p-0 pt-5 px-4">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-400'>Try another date</span>
                    }
                </p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} </p>
                <div class="card-actions justify-center mt-4 mb-3">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white uppercase">book Available</button>
                </div>
            </div>
        </div>
    );
};

export default Service;