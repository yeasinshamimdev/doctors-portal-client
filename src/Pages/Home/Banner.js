import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic maxime incidunt quod numquam, blanditiis odio temporibus veniam qui esse repudiandae eos deleniti mollitia soluta cupiditate beatae sunt nostrum amet.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;