import React from 'react';

const Review = ({ peopleReview }) => {
    const { name, img, review, address, } = peopleReview;

    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p className='text-justify'>{review}</p>
                <div className='flex mt-9 items-center'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='md:w-16' src={img} alt='people' />
                        </div>
                    </div>
                    <div className='ml-3.5'>
                        <h4>{name}</h4>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;