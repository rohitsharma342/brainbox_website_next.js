// "use client";
// import React from "react";
// // import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import GoogleIcon from '@mui/icons-material/Google';
// import { SparklesCore } from "./ui/sparkles";

// function Section1() {
//   return (
//     <div className="relative">
//       {/* Background Beams */}
//       {/* <div className="absolute inset-0 -z-10">
//         <BackgroundBeamsWithCollision />
//       </div> */}

//       {/* Content Section */}
//       <div>
//         {/* Badges Section */}
//         <div className="max-sm:hidden flex overflow-x-scroll hide-scrollbar justify-center space-x-4 mb-8 mt-28">
//           {/* Badge 1 */}
//           <div className="flex items-center space-x-2 lg:px-4 lg:py-1 bg-white rounded-full shadow-sm border">
//            <GoogleIcon/>
//             <p className="text-sm font-medium">Top 20 Indian Startups of 2024</p>
//           </div>

//           {/* Badge 2 */}
//           <div className="flex items-center space-x-2 lg:px-4 lg:py-1 bg-white rounded-full shadow-sm border">
//           <GoogleIcon/>
//             <p className="text-sm font-medium">Top 20 Indian Startups of 2023</p>
//           </div>

//           {/* Badge 3 */}
//           <div className=" flex items-center lg:space-x-2  lg:px-4 lg:py-1 bg-white rounded-full shadow-sm border">
//           <GoogleIcon/>

//             <p className="text-sm font-medium">AI Bootcamp Top 20 - 2024</p>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div>
//           <p className="lg:text-[65px] max-sm:mt-28 font-bold text-center">
//             Transform Your Vision into
//           </p>
//           <p className="lg:text-[60px] font-bold text-blue-600 lg:mt-6 max-sm:leading-8 text-center">
//             Exceptional Mobile Experience
//           </p>
//           <p className="lg:text-gray-500 text-lg max-sm:text-sm mt-10 lg:w-[50%] mx-auto text-center">
//             Your trusted partner in crafting innovative mobile solutions that drive
//             growth and deliver exceptional user experiences. Let's bring your app idea
//             to life.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center space-x-6 mt-8">
//           <button className="bg-blue-500 text-white text-sm  font-medium lg:px-6 max-sm:px-2 py-3 rounded-lg hover:bg-blue-600">
//             Schedule a Free Consultation
//           </button>
//           <button className="bg-white text-gray-700 border text-sm font-medium lg:px-6 py-3 max-sm:px-2  rounded-lg hover:bg-gray-100">
//             Explore Our Services
//           </button>
//         </div>

//         {/* Statistics Section */}
//         <div className="grid grid-cols-4 gap-4 lg:w-[90%] max-sm:w-[95%] mx-auto text-center mt-16">
//           <div className="text-center border rounded-lg  lg:p-6 bg-white hover:shadow-md">
//             <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">100+</p>
//             <p className="lg:text-gray-500 lg:mt-2 text-sm  max-sm:text-[14px]">Apps Delivered</p>
//           </div>
//           <div className="text-center border rounded-lg  lg:p-6 bg-white hover:shadow-md">
//             <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">98%</p>
//             <p className="lg:text-gray-500 lg:mt-2 text-sm  max-sm:text-[14px]">Client Satisfaction</p>
//           </div>
//           <div className="text-center border rounded-lg  lg:p-6 bg-white hover:shadow-md">
//             <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">50+</p>
//             <p className="lg:text-gray-500 lg:mt-2 text-sm  max-sm:text-[14px]">Expert Developers</p>
//           </div>
//           <div className="text-center border rounded-lg  lg:p-6 bg-white hover:shadow-md">
//             <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">8+</p>
//             <p className="lg:text-gray-500 lg:mt-2 text-sm  max-sm:text-[14px]">Years Experience</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section1;



"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SparklesCore } from "./ui/sparkles";
import GoogleIcon from '@mui/icons-material/Google';
import { motion, AnimatePresence } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';
const words = ["Vision", "Ideas", "Thoughts"];

export function Section1() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-[85vh]">
        {/* SparklesCore Background */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="absolute inset-0 w-full h-full z-0"
          particleColor="#000000"
        />
        {/* Badges Section */}
        <div className="max-sm:hidden flex overflow-x-scroll hide-scrollbar justify-center space-x-4 mb-8 mt-24">
         <div className="flex gap-2 justify-center items-center border px-3 py-1 rounded-xl bg-white">
          <div>
            <img className="w-[65px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"/>
          </div>
          <div className="text-[20px]">4.5 <StarIcon sx={{fontSize:"24px",mb:"5px",color:"#EFBF04"}}/></div>
         </div>
         <div className="flex gap-2 justify-center items-center border px-3 py-1 rounded-xl bg-white">
          <div>
            <img className="w-[65px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"/>
          </div>
          <div className="text-[20px]">4.5 <StarIcon sx={{fontSize:"24px",mb:"5px",color:"#EFBF04"}}/></div>
         </div>
        </div>
        <div
          className="h-[40rem] w-full max-sm:-mt-10  flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1
            className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-black relative z-20">
            <div>
              <p className="lg:text-[65px] lg:-mt-36 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
                Transform Your{" "}
                <span className="relative inline-block bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[index]} // Triggers re-render for smooth transition
                      initial={{ opacity: 0, rotateX: 90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      exit={{ opacity: 0, rotateX: -90 }} // Flips smoothly
                      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                      className="inline-block bg-clip-text bg-gradient-to-r from-black to-black leading-[1.2] min-h-[1em] flex items-center"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>{" "}
                Into
              </p>

              <p className="lg:text-[60px] font-bold text-blue-500 lg:mt-0 max-sm:leading-8 text-center">
                Exceptional Mobile Experience
              </p>
            </div>

          </h1>

          {/* Gradients */}

          <div className="flex justify-center space-x-6 mt-">


            {/* Main Content */}
            <div className="relative z-10 ">
              <p className="lg:text-black text-lg max-sm:text-sm mt-5 lg:w-[50%] mx-auto text-center leading-6">
                We are a mobile app development agency building world-class digital products for startups and global brands. Not just another agency, we are your dedicated tech partners🚀
              </p>
              <div className="flex justify-center space-x-6 mt-10">
                <button className="bg-blue-500 text-white  font-medium lg:px-6 max-sm:px-2 py-3 rounded-lg hover:bg-blue-600">
                Book Your Free Strategy Call
                </button>
                <button className="bg-white text-black border-2 border-black  font-medium lg:px-6 py-3 max-sm:px-2 rounded-lg hover:bg-gray-100">
                Get Your Free Project Estimate
                </button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[90%] max-sm:w-[95%] mx-auto text-center mt-10">
                <div className="text-center border rounded-lg lg:p-6 bg-white hover:shadow-md">
                  <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">8+</p>
                  <p className="lg:text-gray-500 lg:mt-2  max-sm:text-[14px]">Years Experience</p>
                </div>
                <div className="text-center border rounded-lg lg:p-6 bg-white hover:shadow-md">
                  <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">95%</p>
                  <p className="lg:text-gray-500 lg:mt-2  max-sm:text-[14px]">Returning Clients</p>
                </div>
                <div className="text-center border rounded-lg lg:p-6 bg-white hover:shadow-md">
                  <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">100+</p>
                  <p className="lg:text-gray-500 lg:mt-2  max-sm:text-[14px]">Apps Delivered</p>
                </div>
                <div className="text-center border rounded-lg lg:p-6 bg-white hover:shadow-md">
                  <p className="text-2xl max-sm:mt-1 max-sm:text-[18px] font-bold text-blue-600">50+</p>
                  <p className="lg:text-gray-500 lg:mt-2  max-sm:text-[14px]">Countries Served</p>
                </div>
              </div>

            </div>
          </div>

          {/* Radial Gradient to prevent sharp edges */}

          <div
            className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>




    </>
  );
}
