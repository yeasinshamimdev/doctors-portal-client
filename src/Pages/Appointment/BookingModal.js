import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        };
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on ${data?.booking?.date} at ${data?.booking?.slot}`)
                }
                setTreatment(null);
            })
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
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder='Phone number' className="input input-bordered w-full" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;