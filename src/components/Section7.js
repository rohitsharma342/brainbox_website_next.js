import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function Section7() {
  return (
    <div className="mt-10 ">
      {/* Header */}
      <div className="text-center">
        <h2 className="lg:text-3xl font-bold text-gray-800">Our Growth Journey</h2>
        <p className="mt-2 max-sm:mt-1 text-[18px] max-sm:text-[16px] max-sm:leading-5 capitalize text-gray-600">
          As a mobile app development company, we have bagged a few reputed accolades as well
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="mt-8 overflow-x-auto mx-auto hide-scrollbar flex w-[97%] ">
        <div className="flex space-x-6 lg:px-6">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>


          {/* Card 2 */}
          <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>


          {/* Card 3 */}
          <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>


          {/* Card 4 */}
          <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>
             {/* Card 1 */}
             <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>


          {/* Card 2 */}
          <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>


          {/* Card 3 */}
          <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>


          {/* Card 4 */}
          <div className="flex-shrink-0 w-64 bg-red-50 hover:shadow-lg lg:py-10   border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="/company.png"
              alt="Award 4"
              className="w-auto h-10 mb-4"
            />
            <h3 className="text-gray-800 text-sm lg:mt-3 font-semibold">2023</h3>
            <p className=" text-sm font-medium mt-2 max-sm:leading-4">Top Mobile App Development Companies</p>
          </div>

        </div>
      </div>
      <hr className="mt-20 max-sm:mt-10"/>
    </div>
  );
}

export default Section7;
