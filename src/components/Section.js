"use client";
import  { useState, useRef } from "react";
import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/24/outline';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';


function Section() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRefs = useRef([]); // Array to store video references

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
            videoRefs.current[index].play(); // Play the video
            videoRefs.current[index].muted = isMuted; // Apply current mute state
        }
    };

    // Handle mouse leave event (exit hover from the card)
    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause(); // Pause the video
            // Do not reset the video to the start, so it can resume from where it paused
        }
    };

    return (
        <div className="py-12  px-6 bg-gray-50">
            {/* Heading */}
            <div className="text-center">
                <h2 className="lg:text-3xl max-sm:leading-7 font-bold">Success Stories That Drive Innovation</h2>
                <p className="text-gray-500 lg:w-[50%] mx-auto text-center text-[16px] mt-2 max-sm:leading-5">
                    Discover how we’ve helped visionaries like you transform their ideas into successful mobile applications
                </p>
            </div>

            {/* Cards Section */}
            <div className="mt-8 grid lg:w-[70%] grid-cols-1 md:grid-cols-2 gap-6 mx-auto text-center">
                {/* Card 1 */}
                <div
                    className="border rounded-lg hover:shadow-lg overflow-hidden group cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                >
                    <div className="h-80 bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
                        <video
                            ref={(el) => (videoRefs.current[0] = el)} // Store the video reference
                            className="absolute top-0 left-0 w-full h-full object-cover hidden group-hover:block"
                            src="/web vedio.mp4" // Replace with your video file path
                            muted={isMuted}
                            loop
                            autoPlay
                        ></video>
                        {/* Thumbnail */}
                        <img
                            className="w-full h-full object-cover group-hover:hidden"
                            src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg" // Replace with your thumbnail image path
                            alt="Video Thumbnail"
                        />
                        {/* Play icon */}
                        <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                            <span className="text-white text-2xl bg-black bg-opacity-70 rounded-full p-2 w-12">▶</span>
                        </div>
                        <button
                            id="muteButton"
                            className="absolute bottom-2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            onClick={toggleMute} // Call the toggleMute function on click
                        >
                            {isMuted ? (
                                <FaVolumeMute className="h-4 w-4 text-white" />
                            ) : (
                                <FaVolumeUp className="h-4 w-4 text-white" />
                            )}
                        </button>
                    </div>
                    <div className="p-4 text-start">
                        <span className="text-blue-500 bg-blue-100 rounded-xl px-4 py-1 text-sm">HealthTech</span>
                        <h3 className="text-lg font-semibold mt-2">Revolutionary Healthcare </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                        </p>
                        {/* <div className="border w-[95%] mt-10"></div> */}
                        {/* <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
                            <span>👥 12 Team Members</span>
                            <span>⏱ 8 months</span>
                        </div> */}
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    className="border rounded-lg hover:shadow-lg overflow-hidden group cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <div className="h-80 bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
                        <video
                            ref={(el) => (videoRefs.current[1] = el)} // Store the video reference
                            className="absolute top-0 left-0 w-full h-full object-cover hidden group-hover:block"
                            src="/web vedio.mp4" // Replace with your video file path
                            muted={isMuted}
                            loop
                            autoPlay
                        ></video>
                        <img
                            className="w-full h-full object-cover group-hover:hidden"
                            src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg" // Replace with your thumbnail image path
                            alt="Video Thumbnail"
                        />
                        <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                            <span className="text-white text-2xl bg-black bg-opacity-70 rounded-full p-2 w-12">▶</span>
                        </div>
                        <button
                            id="muteButton"
                            className="absolute bottom-2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            onClick={toggleMute} // Call the toggleMute function on click
                        >
                            {isMuted ? (
                                <FaVolumeMute className="h-4 w-4 text-white" />
                            ) : (
                                <FaVolumeUp className="h-4 w-4 text-white" />
                            )}
                        </button>
                    </div>
                    <div className="p-4 text-start">
                        <span className="text-green-500 bg-green-100 px-4 py-1 rounded-xl text-sm">FinTech</span>
                        <h3 className="text-lg font-semibold mt-2">Next-Gen Banking Solution</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            
                        </p>
                        {/* <div className="border  w-[95%] mt-10"></div> */}
                        {/* <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
                            <span>👥 15 Team Members</span>
                            <span>⏱ 12 months</span>
                        </div> */}
                    </div>
                </div>
{/* card 3 */}
                <div
                    className="border rounded-lg hover:shadow-lg overflow-hidden group cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <div className="h-80 bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
                        <video
                            ref={(el) => (videoRefs.current[1] = el)} // Store the video reference
                            className="absolute top-0 left-0 w-full h-full object-cover hidden group-hover:block"
                            src="/web vedio.mp4" // Replace with your video file path
                            muted={isMuted}
                            loop
                            autoPlay
                        ></video>
                        <img
                            className="w-full h-full object-cover group-hover:hidden"
                            src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg" // Replace with your thumbnail image path
                            alt="Video Thumbnail"
                        />
                        <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                            <span className="text-white text-2xl bg-black bg-opacity-70 rounded-full p-2 w-12">▶</span>
                        </div>
                        <button
                            id="muteButton"
                            className="absolute bottom-2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            onClick={toggleMute} // Call the toggleMute function on click
                        >
                            {isMuted ? (
                                <FaVolumeMute className="h-4 w-4 text-white" />
                            ) : (
                                <FaVolumeUp className="h-4 w-4 text-white" />
                            )}
                        </button>
                    </div>
                    <div className="p-4 text-start">
                        <span className="text-green-500 bg-green-100 px-4 py-1 rounded-xl text-sm">FinTech</span>
                        <h3 className="text-lg font-semibold mt-2">Next-Gen Banking Solution</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            
                        </p>
                        {/* <div className="border  w-[95%] mt-10"></div> */}
                        {/* <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
                            <span>👥 15 Team Members</span>
                            <span>⏱ 12 months</span>
                        </div> */}
                    </div>
                </div>
               {/* card 4 */}
               <div
                    className="border rounded-lg hover:shadow-lg overflow-hidden group cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <div className="h-80 bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
                        <video
                            ref={(el) => (videoRefs.current[1] = el)} // Store the video reference
                            className="absolute top-0 left-0 w-full h-full object-cover hidden group-hover:block"
                            src="/web vedio.mp4" // Replace with your video file path
                            muted={isMuted}
                            loop
                            autoPlay
                        ></video>
                        <img
                            className="w-full h-full object-cover group-hover:hidden"
                            src="https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg" // Replace with your thumbnail image path
                            alt="Video Thumbnail"
                        />
                        <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                            <span className="text-white text-2xl bg-black bg-opacity-70 rounded-full p-2 w-12">▶</span>
                        </div>
                        <button
                            id="muteButton"
                            className="absolute bottom-2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                            onClick={toggleMute} // Call the toggleMute function on click
                        >
                            {isMuted ? (
                                <FaVolumeMute className="h-4 w-4 text-white" />
                            ) : (
                                <FaVolumeUp className="h-4 w-4 text-white" />
                            )}
                        </button>
                    </div>
                    <div className="p-4 text-start">
                        <span className="text-green-500 bg-green-100 px-4 py-1 rounded-xl text-sm">FinTech</span>
                        <h3 className="text-lg font-semibold mt-2">Next-Gen Banking Solution</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            Transformed patient care with an innovative telehealth solution that increased  by 300%.
                            
                        </p>
                        {/* <div className="border  w-[95%] mt-10"></div> */}
                        {/* <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
                            <span>👥 15 Team Members</span>
                            <span>⏱ 12 months</span>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* View More Link */}
            <div className="text-center mt-8">
                <a href="#" className="text-blue-500 text-sm font-semibold hover:underline">
                    View More Success Stories →
                </a>
            </div>
        </div>
    );
}

export default Section;
