"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const contentData = [
  {
    tag: "HealthTech",
    title: "Revolutionary Healthcare",
    description:
      "Transformed patient care with an innovative telehealth solution that increased by 300%.",
    videoSrc: "/rentah_video_1.mp4",
    thumbnail:
      "https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg",
  },
  {
    tag: "HealthTech",
    title: "Revolutionary Healthcare 2",
    description:
      "Expanded healthcare access in rural areas with mobile diagnostics. Helped 10,000+ patients monthly.",
    videoSrc: "/medocly_video_1.mp4",
    thumbnail:
      "https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg",
  },
  {
    tag: "HealthTech",
    title: "Revolutionary Healthcare 2",
    description:
      "Expanded healthcare access in rural areas with mobile diagnostics. Helped 10,000+ patients monthly.",
    videoSrc: "/tranceform_video_1.mp4",
    thumbnail:
      "https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg",
  },
];

export default function ScrollFadeContent() {
  const [isMuted, setIsMuted] = useState(true);
  // Container refs for only the video card containers (right side).
  const containerRefs = useRef([]);
  // State to track which video card container is active (in viewport).
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter entries that are visible.
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleEntries.length === 0) {
          setActiveVideoIndex(null);
        } else {
          // Choose the entry with highest visibility.
          const mostVisible = visibleEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          const index = parseInt(mostVisible.target.dataset.index, 10);
          setActiveVideoIndex(index);
        }
        
        // Play or pause videos.
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (entry.isIntersecting) {
            if (video) video.play();
          } else {
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    containerRefs.current.forEach((container) => {
      if (container) observer.observe(container);
    });

    return () => {
      containerRefs.current.forEach((container) => {
        if (container) observer.unobserve(container);
      });
    };
  }, []);

  return (
    <div className="py-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="lg:text-3xl max-sm:leading-7 font-bold">
          Success Stories That Drive Innovation
        </h2>
        <p className="text-gray-500 lg:w-[50%] mx-auto text-center text-[16px] mt-2 max-sm:leading-5">
          Discover how we’ve helped visionaries like you transform their ideas
          into successful mobile applications
        </p>
      </div>

      {/* Video Cards */}
      <div className="space-y-16">
        {contentData.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 space-y-3 px-4"
            >
              <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {item.tag}
              </span>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex gap-2 flex-wrap justify-center mt-10">
                <img
                  className="w-40"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                  alt="App Store Badge"
                />
                <img
                  className="w-40"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Play Store Badge"
                />
              </div>
            </motion.div>

            {/* Video Right */}
            <div
              data-index={i}
              ref={(el) => (containerRefs.current[i] = el)}
              style={{
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                transform: activeVideoIndex === i ? "scale(1.05)" : "scale(1)",
                boxShadow: activeVideoIndex === i ? "0 10px 20px rgba(0,0,0,0.2)" : "none",
                border: activeVideoIndex === i ? "2px solid blue" : "2px solid transparent",
                paddingRight: "1rem",
              }}
              className="relative max-sm:w-[90%] rounded-lg md:w-[70%] lg:mr-10 overflow-hidden border-2"
            >
              <video
                src={item.videoSrc}
                style={{
                  width: "calc(100% + 1rem)",
                  marginRight: "-1rem",
                }}
                className="lg:h-[500px] object-cover rounded-lg shadow-lg"
                loop
                muted={isMuted}
                playsInline
              ></video>
              <button
                className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                onClick={toggleMute}
              >
                {isMuted ? <FaVolumeMute className="h-4 w-4" /> : <FaVolumeUp className="h-4 w-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
