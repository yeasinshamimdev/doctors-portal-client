import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        { _id: 1, name: 'Winson Herry', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: people1, address: 'California' },
        { _id: 2, name: 'Jeson Herry', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: people2, address: 'California' },
        { _id: 3, name: 'Steve Herry', review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: people3, address: 'California' },
    ];


    return (
        <section className='py-20 md:px-14'>
            <div className='flex px-4 md:px-0'>
                <div className='flex-1'>
                    <h4 className='text-primary text-sm md:text-xl font-bold '>Testimonial</h4>
                    <h1 className='text-2xl md:text-4xl pt-2'>What Our Patients Says</h1>
                </div>
                <div className='flex-1 flex justify-end'>
                    <img className='h-16 md:h-32' src={quote} alt="quote" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-12 md:py-24 px-4 md:px-0'>
                {
                    reviews.map(peopleReview => <Review key={peopleReview._id} peopleReview={peopleReview} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;