import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className='bg-cover py-10' style={{ background: `url(${appointment})` }}>
            <div>
                <h5 className='text-center text-primary text-xl font-bold'>Contact Us</h5>
                <h1 className='text-2xl md:text-4xl text-center text-white mt-2 mb-8'>Stay connected with us</h1>
                <div className='flex px-4'>
                    <form className='md:w-2/4 w-full mx-auto'>
                        <input className='block w-full mb-5 h-10 outline-none p-1 rounded-md' type="email" name="email" id="email" placeholder='Email Address' />
                        <input className='block w-full mb-5 h-10 outline-none p-1 rounded-md' type="text" name='subject' id="subject" placeholder='Subject' />
                        <textarea className='block w-full mb-5 md:h-40 h-28 outline-none p-1 rounded-md' name="message" id="message" placeholder='Your Message'></textarea>
                        <div className='mt-10 flex justify-center'>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;