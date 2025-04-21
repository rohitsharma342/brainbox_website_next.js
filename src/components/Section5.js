"use client";
import React, { useState, useRef } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const testimonials = [
  {
    type: "video",
    src: "/testimonial_1.mp4",
    name: "Sarah Johnson",
    title: "CTO, HealthTech Solutions",
    feedback:
      "BrainBox Apps transformed our healthcare vision into reality. Their expertise in HIPAA compliance and user experience design helped us create an app that's now essential for thousands of healthcare professionals.",
  },
  {
    type: "video",
    src: "/testimonial_2.mp4",
    name: "Mark Evans",
    title: "CEO, FinNext Inc.",
    feedback:
      "Thanks to BrainBox Apps, our fintech platform scaled seamlessly. Their robust backend architecture and sleek UI elevated our product quality immensely.",
  },
  {
    type: "video",
    src: "/testimonial_3.mp4",
    name: "Lily Chen",
    title: "Founder, EduSpark",
    feedback:
      "We needed a reliable team to build our e-learning platform and BrainBox delivered more than expected. Intuitive UX and powerful features!",
  },
  {
    type: "image",
    src: "/thumbnail_1.jpg",
    name: "David Kim",
    title: "COO, TravelZing",
    feedback:
      "Their team was always ahead of deadlines. We loved their agile communication and strong design sense. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team!",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
  {
    type: "image",
    src: "/thumbnail_2.jpg",
    name: "Emily Stone",
    title: "Product Head, EcoGro",
    feedback:
      "BrainBox’s app brought our sustainable mission closer to users. Super creative and technically sound team! undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line",
  },
];

function Section5() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = !isMuted;
      }
    });
  };

  const handleMouseEnter = (index) => {
    const testimonial = testimonials[index];
    if (testimonial.type === "video" && videoRefs.current[index]) {
      videoRefs.current[index].play();
      videoRefs.current[index].muted = isMuted;
    }
  };

  const handleMouseLeave = (index) => {
    const testimonial = testimonials[index];
    if (testimonial.type === "video" && videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div className="bg-gray-50 lg:py-12 max-sm:py-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Trusted by Innovative Leaders
        </h2>
        <p className="text-gray-600 text-sm md:text-base lg:mt-2 max-sm:w-[90%] text-center mx-auto">
          Hear from visionaries who trusted us with their mobile app development
          journey
        </p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
  {testimonials.map((testimonial, index) => (
    <div
    key={index}
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={() => handleMouseLeave(index)}
    className={`break-inside-avoid p-4 bg-white rounded-lg hover:shadow-md ${
      testimonial.type === "video" 
        ? "h-[400px] max-sm:h-[250px]" 
        : "h-auto" // Changed from min-h-[200px]
    } border flex cursor-pointer`}
  >
      {testimonial.type === "video" && (
        <div className="w-[1500px] rounded-md bg-gray-300 flex items-center justify-center text-2xl font-bold relative">
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="absolute rounded-l-md top-0 left-0 w-full max-h-[100%] object-cover transition-all duration-300 ease-in-out"
            src={testimonial.src}
            muted={isMuted}
            
            loop
          ></video>
          <button
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
      )}

      <div className="ml-6 mr-3 pt-4 pb-4 ">
        <div className="flex items-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              {testimonial.name}
            </h4>
            <p className="text-xs text-gray-600">{testimonial.title}</p>
          </div>
        </div>

        <div className="text-yellow-400 lg:mb-4 max-sm:mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <GradeIcon key={i} />
          ))}
        </div>

        <p className="text-gray-600 text-sm max-sm:text-xs">
          "{testimonial.feedback}"
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default Section5;
