import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';
import appointmentBd from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
            className='flex justify-center items-center mt-6 pt-16'
            style={{ backgroundImage: `url(${appointmentBd})` }}>
            <div className='flex-1 md:pl-14 hidden md:block'>
                <img src={doctorSmall} className="mt-[-150px]" alt='appointment' />
            </div>
            <div className='text-white flex-1 md:px-16 mb-10 px-6'>
                <h4 className='text-xl mb-4 font-bold text-primary'>Appointment</h4>
                <h1 className="md:text-4xl text-2xl font-bold">Make an appointment Today</h1>
                <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;