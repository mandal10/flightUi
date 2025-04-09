import React from "react";

const destinations = [
    {
        image: "/image/img1.png",
        title: "Spiti Valley, Himachal",
    },
    {
        image: "/image/img2.png",
        title: "Goa Beach",
    },
    {
        image: "/image/img3.png",
        title: "Udaipur Palace",
    },
    {
        image: "/image/img4.png",
        title: "Niagara Falls",
    },
    {
        image: "/image/img5.png",
        title: "Himalayan Temple",
    },
    {
        image: "/image/img6.png",
        title: "Western Ghats",
    },
    {
        image: "/image/img7.png",
        title: "Rock Peak Adventure",
    },
    {
        image: "/image/img1.png",
        title: "Rock Peak Adventure",
    },
];

export default function Gallery() {
    return (
        <div className="p-6 sm:px-12 lg:px-24 bg-white min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <p className="text-[25px] font-bold text-[#21A8D9]">TOP DESTINATIONS</p>
                <h2 className="text-[35px] font-bold text-[#464646]">Discover Top Destinations</h2>
            </div>

            {/* Image Grid with Overlay Text */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {destinations.map((item, index) => (
                    <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-2xl">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-semibold p-3 text-center">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
