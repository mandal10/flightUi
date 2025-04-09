import React, { useState } from 'react';
import { FaLocationArrow, FaChevronDown, FaSearch } from 'react-icons/fa'; // Location, ChevronDown, and Search icons

const Location = () => {

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log("Form Submitted");
    };

    return (
        <div className="container mx-auto ">
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="">
                <div className='border-[#FFFFFF] bg-gray-100 border-[2px] py-6 px-8 rounded-full items-center justify-between flex gap-6'>

                    {/* Location Section */}
                    <div className='flex items-center space-x-3'>
                        <div className="">
                            <img src="./image/PlaceMarker.png" alt="Location" className='text-[10px]' />
                        </div>

                        <div className="flex items-center space-x-2">
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <span>Location</span>
                                    <FaChevronDown className="text-[#21A8D9] text-sm " />
                                </div>
                                <div className="text-sm text-[#00232E]">Delhi, India</div>
                            </div>
                        </div>
                    </div>
                    <div className='border-gray-400 border-r-[2px] h-[20px]'></div>

                    {/* Date Section */}
                    <div className='flex items-center space-x-3'>
                        <div className="">
                            <img src="./image/Calender.png" alt="Calendar" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <span>Date</span>
                                    <FaChevronDown className="text-[#21A8D9] text-sm " />
                                </div>
                                <div className="text-sm text-[#00232E]">22 Sept, 2025</div>
                            </div>
                        </div>
                    </div>
                    <div className='border-gray-400 border-r-[2px] h-[20px]'></div>

                    {/* Return Section */}
                    <div className='flex items-center space-x-3'>
                        <div className="">
                            <img src="./image/Calender.png" alt="Calendar" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <span>Return</span>
                                    <FaChevronDown className="text-[#21A8D9] text-sm " />
                                </div>
                                <div className="text-sm text-[#00232E]">22 Sept, 2025</div>
                            </div>
                        </div>
                    </div>
                    <div className='border-gray-400 border-r-[2px] h-[20px]'></div>

                    {/* Search Button Section */}
                    <div className="flex items-center space-x-2">
                        <button type="submit" className="flex items-center px-4 py-4 bg-[#21A8D9] text-white rounded-full">
                            <FaSearch className="" /> {/* Search icon */}

                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Location;
