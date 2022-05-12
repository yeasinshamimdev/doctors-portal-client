import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="font-bold text-xl">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-y-3 justify-items-center mt-10'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option key={Math.random() * 20} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;