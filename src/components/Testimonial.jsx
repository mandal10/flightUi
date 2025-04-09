import React from "react";

const testimonials = [
    {
        message:
            "An unforgettable experience! Everything from the hotel booking to local transport was smooth and seamless.",
        name: "John Smith",
        image: "/image/user.png", // Replace with your user image path
    },
    // Repeat or map with different data as needed
];

export default function Testimonial() {
    return (
        <div className="bg-white py-16 px-4 sm:px-8 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="relative bg-white rounded-xl p-6 shadow-md flex flex-col justify-between"
                    >
                        {/* Top Quote Mark */}
                        <div className="absolute -top-4 left-4 text-5xl text-[#013F52] leading-none">
                            <span className="font-serif">“</span>
                        </div>

                        {/* Optional top-center image */}
                        {(i === 1 || i === 2) && (
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mx-auto -mt-12 mb-4"
                            />
                        )}

                        {/* Main Text Content */}
                        <div className="text-center md:text-left px-2">
                            <p className="text-[#013F52] font-medium text-base mb-4">
                                {t.message}
                            </p>
                            <p className="text-gray-500 text-sm">– {t.name}</p>
                        </div>

                        {/* Optional side image */}
                        {(i === 0 || i === 3) && (
                            <img
                                src={t.image}
                                alt={t.name}
                                className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                            />
                        )}

                        {/* Bottom Quote Mark */}
                        {(i === 1 || i === 3) && (
                            <div className="absolute -bottom-4 right-4 text-5xl text-[#013F52] leading-none rotate-180">
                                <span className="font-serif">“</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
