import React from 'react';
import Navbar from './Navbar';
import Location from './Location';
import Travel from './Travel';
import Gallery from './Gallery';
import Testimonial from './Testimonial';

const Home = () => {

    return (
        <div
            className=" bg-cover bg-center "
            style={{
                backgroundImage: 'url(./image/bg.png)' // Replace with your background image path
            }}
        >
            <Navbar />
            <div className='bg-contain  bg-no-repeat py-20' style={{
                backgroundImage: 'url(./image/left.png)' // Replace with your background image path
            }}>

                <div className='px-4 sm:px-6 md:px-12 lg:px-[100px]'>
                    <div className="grid grid-cols-[60%_40%] items-center justify-between  " >
                        {/* Left side content */}
                        <div className="w-full   space-y-6 bg-contain  bg-no-repeat" style={{
                            backgroundImage: 'url(./image/vector.png)' // Replace with your background image path
                        }} >
                            <h1 className=" font-bold text-[#5e5e5e] text-[32px] mb-[0px]">Best Picks for You</h1>
                            <p className="text-[50px] leading-[60px] text-[#00232E]">Where every trip meets the <span className='text-[#21A8D9]'>perfect </span> stay!</p>

                            <div className='relative'>
                                <Location />
                            </div>
                        </div>

                        {/* Right side image */}
                        <div className="hidden md:block  h-full">
                            <img
                                src="./image/heroimg.png" // Replace with the right-side image path
                                alt="Right side image"
                                className="h-full object-cover "
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Travel />
            <Gallery />



        </div>
    );
};

export default Home;
