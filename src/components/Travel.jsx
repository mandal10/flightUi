import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const destinations = [
    {
        title: "Kullu Manali",
        price: "₹ 20000",
        duration: "10 Days trip",
        image: "/image/manali.png",
    },
    {
        title: "Shimla",
        price: "₹ 18000",
        duration: "7 Days trip",
        image: "/image/manali.png",
    },
    {
        title: "Goa, India",
        price: "₹ 25000",
        duration: "6 Days trip",
        image: "/image/manali.png",
    },
    {
        title: "Kerala, India",
        price: "₹ 27000",
        duration: "8 Days trip",
        image: "/image/manali.png",
    },
    {
        title: "Darjeeling",
        price: "₹ 22000",
        duration: "5 Days trip",
        image: "/image/manali.png",
    },
];

export default function Travel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div
            className="min-h-screen py-10 px-6 sm:px-[100px] bg-cover bg-center"
            style={{ backgroundImage: 'url(./image/bg.png)' }}
        >
            <p className="text-[25px] font-bold text-[#21A8D9] ">TOP DESTINATIONS</p>
            <h2 className="text-[35px] font-bold text-[#464646] mb-6">Discover Top Destinations</h2>

            <Slider {...settings}>
                {destinations.map((dest, index) => (
                    <div key={index} className="px-2">
                        <div className="bg-white rounded-xl shadow overflow-hidden h-full flex flex-col">
                            <img
                                src={dest.image}
                                alt={dest.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4 grid grid-cols-[60%_40%] justify-between items-center gap-5">
                                <h3 className="font-semibold text-[18px] text-gray-700">
                                    {dest.title.length > 30
                                        ? dest.title.slice(0, dest.title.length - 10) + "..."
                                        : dest.title}
                                </h3>
                                <div className="text-sm text-gray-500 flex flex-col pr-5 gap-1">
                                    <span className="bg-[#21A8D9CC] text-white flex justify-center rounded-3xl">{dest.price}</span>
                                    <span>{dest.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>


            <div className=" py-[100px] flex justify-between items-center px-[30px]">

                <div className="bg-[#21A8D9CC] h-[300px] w-[400px] relative rounded-xl">
                    <div className="bg-[#E2F7FF] h-[300px] flex flex-col justify-center w-[400px] absolute left-[25px] top-[25px] rounded-tr-xl rounded-br-xl rounded-bl-xl p-6 space-y-6">


                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <img src="./image/Car.png" alt="" className="w-[23px]" />

                                <h4 className="text-lg font-semibold text-gray-800 relative">
                                    Book Car
                                    <span className="absolute left-0 bottom-0 w-full h-1 bg-sky-300 rounded-full translate-y-1/2 -z-10"></span>
                                </h4>
                            </div>
                            <p className="text-gray-600 mb-2 text-sm">Plan Your Stay and Ride in One Place</p>
                            <button className="flex items-center text-sm font-semibold text-gray-800 gap-2">
                                Explore Now
                                <span className="bg-sky-500 text-white px-2 py-1 rounded-full">
                                    →
                                </span>
                            </button>
                        </div>


                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <img src="./image/Car.png" alt="" className="w-[23px]" />

                                <h4 className="text-lg font-semibold text-gray-800 relative">
                                    Book Hotel
                                    <span className="absolute left-0 bottom-0 w-full h-1 bg-sky-300 rounded-full translate-y-1/2 -z-10"></span>
                                </h4>
                            </div>
                            <p className="text-gray-600 mb-2 text-sm">Where You Stay and How You Go — Handled</p>
                            <button className="flex items-center text-sm font-semibold text-gray-800 gap-2">
                                Explore Now
                                <span className="bg-sky-500 text-white px-2 py-1 rounded-full">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>


                </div>
                <div className="h-[300px] w-[400px] relative rounded-tr-xl rounded-br-xl rounded-bl-xl">

                    <div className="relative z-10 rounded-tr-xl rounded-br-xl rounded-bl-xl overflow-hidden">
                        <img src="./image/travel1.png" alt="" className="h-[300px] w-[400px] object-cover" />
                    </div>


                    <div className="bg-[#E2F7FF] z-0 h-[300px] w-[400px] absolute left-[-20px] bottom-[-20px] rounded-tr-xl rounded-br-xl rounded-bl-xl">
                    </div>
                </div>


            </div>

        </div>
    );
}
