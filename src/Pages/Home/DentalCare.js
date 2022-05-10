import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div>
            <div className="hero min-h-screen md:p-40 gap-8 py-12 px-4">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={treatment} className="md:max-w-sm rounded-lg" alt='Dental Care' />
                    <div className='md:ml-16'>
                        <h1 className="text-5xl font-bold font-serif">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;