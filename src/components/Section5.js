"use client"
import React, { useState, useRef } from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

function Section5() {

    const [isMuted, setIsMuted] = useState(true);
    const videoRefs = useRef([]);

    // Toggle the mute state
    const toggleMute = () => {
        setIsMuted((prevState) => !prevState);
        videoRefs.current.forEach((video) => {
            if (video) {
                video.muted = !isMuted; // Toggle mute for each video
            }
        });
    };

    // Handle mouse enter event (hover over the card)
    const handleMouseEnter = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play(); // Play the specific video
            videoRefs.current[index].muted = isMuted; // Apply current mute state
        }
    };

    // Handle mouse leave event (exit hover from the card)
    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause(); // Pause the specific video
        }
    };

    return (
        <div className="bg-gray-50 lg:py-12 max-sm:py-6">
            {/* Section Heading */}
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trusted by Innovative Leaders</h2>
                <p className="text-gray-600 text-sm md:text-base lg:mt-2 max-sm:w-[90%] text-center mx-auto">
                    Hear from visionaries who trusted us with their mobile app development journey
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 max-sm:flex lg:gap-36 max-sm:gap-4 overflow-x-scroll hide-scrollbar lg:w-[95%] mx-auto lg:px-4">
                {/* Testimonial 1 */}
                <div
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                    className="bg-white shadow-lg rounded-md text-start lg:w-[470px] max-sm:w-[400px] max-sm:h-[250px] border  flex cursor-pointer"
                >
                    <div className="w-[1000px] rounded-md bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
                        {/* Video element */}
                        <video
                            ref={(el) => (videoRefs.current[0] = el)} // Store the video reference
                            className="absolute rounded-l-md top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:w-[200%] group-hover:h-full"
                            src="/web vedio.mp4"
                            muted={isMuted}
                            loop
                        ></video>

                        {/* Thumbnail */}
                        <img
                            className="w-full h-full object-cover rounded-md group-hover:hidden"
                            src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
                            alt="Video Thumbnail"
                        />

                        {/* Mute button */}
                        <button
                            id="muteButton"
                            className="absolute bottom-2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            onClick={toggleMute}
                        >
                            {isMuted ? (
                                <FaVolumeMute className="h-4 w-4 text-white" />
                            ) : (
                                <FaVolumeUp className="h-4 w-4 text-white" />
                            )}
                        </button>
                    </div>

                    <div className='ml-6 mr-3 pt-4 pb-4'>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="Sarah Johnson"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Sarah Johnson</h4>
                                <p className="text-xs text-gray-600">CTO, HealthTech Solutions</p>
                            </div>
                        </div>

                        <div className="text-yellow-400 lg:mb-4 max-sm:mb-2">
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                        </div>

                        <p className="lfg:text-gray-600 text-sm max-sm:text-xs ">
                            "BrainBox Apps transformed our healthcare vision into reality. Their expertise in HIPAA compliance and user experience design helped us create an app that's now essential for thousands of healthcare professionals."
                        </p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                    className="bg-white shadow-lg rounded-md text-start lg:w-[470px] max-sm:w-[400px] max-sm:h-[250px] border flex cursor-pointer"
                >
                    <div className="w-[1000px] rounded-md bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
                        {/* Video element */}
                        <video
                            ref={(el) => (videoRefs.current[1] = el)} // Store the video reference
                            className="absolute rounded-l-md top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:w-[200%] group-hover:h-full"
                            src="/web vedio.mp4"
                            muted={isMuted}
                            loop
                        ></video>

                        {/* Thumbnail */}
                        <img
                            className="w-full h-full object-cover rounded-md group-hover:hidden"
                            src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
                            alt="Video Thumbnail"
                        />

                        {/* Mute button */}
                        <button
                            id="muteButton"
                            className="absolute bottom-2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            onClick={toggleMute}
                        >
                            {isMuted ? (
                                <FaVolumeMute className="h-4 w-4 text-white" />
                            ) : (
                                <FaVolumeUp className="h-4 w-4 text-white" />
                            )}
                        </button>
                    </div>

                    <div className='ml-6 mr-3 pt-4 pb-4'>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="Sarah Johnson"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Sarah Johnson</h4>
                                <p className="text-xs text-gray-600">CTO, HealthTech Solutions</p>
                            </div>
                        </div>

                        <div className="text-yellow-400 lg:mb-4 max-sm:mb-2">
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                        </div>

                        <p className="text-gray-600 text-sm max-sm:text-xs">
                            "BrainBox Apps transformed our healthcare vision into reality. Their expertise in HIPAA compliance and user experience design helped us create an app that's now essential for thousands of healthcare professionals."
                        </p>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                    className="bg-white shadow-lg rounded-md text-start lg:w-[470px] max-sm:w-[400px] max-sm:h-[250px] border flex cursor-pointer"
                >
                    <div className="w-[1000px] rounded-md bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
                        {/* Video element */}
                        <video
                            ref={(el) => (videoRefs.current[2] = el)} // Store the video reference
                            className="absolute rounded-l-md top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:w-[200%] group-hover:h-full"
                            src="/web vedio.mp4"
                            muted={isMuted}
                            loop
                        ></video>

                        {/* Thumbnail */}
                        <img
                            className="w-full h-full object-cover rounded-md group-hover:hidden"
                            src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
                            alt="Video Thumbnail"
                        />

                        {/* Mute button */}
                        <button
                            id="muteButton"
                            className="absolute bottom-2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            onClick={toggleMute}
                        >
                            {isMuted ? (
                                <FaVolumeMute className="h-4 w-4 text-white" />
                            ) : (
                                <FaVolumeUp className="h-4 w-4 text-white" />
                            )}
                        </button>
                    </div>

                    <div className='ml-6 mr-3 pt-4 pb-4'>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="Sarah Johnson"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Sarah Johnson</h4>
                                <p className="text-xs text-gray-600">CTO, HealthTech Solutions</p>
                            </div>
                        </div>

                        <div className="text-yellow-400 lg:mb-4 max-sm:mb-2">
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                        </div>

                        <p className="text-gray-600 text-sm max-sm:text-xs">
                            "BrainBox Apps transformed our healthcare vision into reality. Their expertise in HIPAA compliance and user experience design helped us create an app that's now essential for thousands of healthcare professionals."
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="text-center mt-8">
                <button className="bg-blue-600 text-white lg:px-6 max-sm:px-4 py-3 max-sm:py-2 rounded-lg font-semibold text-sm max-sm:text-[16px] md:text-base hover:bg-blue-700">
                    Share Your Vision With Us →
                </button>
            </div>
        </div>
    );
}

export default Section5;
