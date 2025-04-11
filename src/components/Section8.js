import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Section8() {
  return (
    
    <div className="bg-gray-50 py-10">
       
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
          Cutting-Edge Technology Stack
        </h2>
        <p className="mt-4 max-sm:mt-2 text-gray-600 text-lg max-sm:text-[14px] max-sm:leading-4">
          We leverage the latest technologies to build robust, scalable, and
          innovative mobile applications 
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-4 max-w-6xl mx-auto px-6">
        {/* iOS Development Card */}
        <div className="bg-white border  border-gray-200 rounded-xl shadow-sm p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0l-6 6m6-6l6 6m-6-6V6m0 12v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0H6a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v10"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl max-sm:text-[18px] font-semibold text-gray-800">iOS Development</h3>
          <ul className="mt-4 text-[18px] max-sm:text-[14px] text-start text-gray-600 max-sm:leading-5 ">
            <li><FiberManualRecordIcon className='text-blue-300 mr-2 ' style={{fontSize:"14px"}}/>Swift</li>
            <li><FiberManualRecordIcon className='text-blue-300 mr-2 ' style={{fontSize:"14px"}}/>SwiftUI</li>
            <li><FiberManualRecordIcon className='text-blue-300 mr-2 ' style={{fontSize:"14px"}}/>Objective-C</li>
          </ul>
        </div>

        {/* Android Development Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0l-6 6m6-6l6 6m-6-6V6m0 12v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0H6a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v10"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl max-sm:text-[18px] font-semibold text-gray-800">
            Android Development
          </h3>
          <ul className="mt-4 text-[18px] max-sm:text-[14px] text-start text-gray-600 max-sm:leading-5 ">
            <li><FiberManualRecordIcon className='text-green-300 mr-2 ' style={{fontSize:"14px"}}/>Kotlin</li>
            <li><FiberManualRecordIcon className='text-green-300  mr-2' style={{fontSize:"14px"}}/>Java</li>
            <li><FiberManualRecordIcon className='text-green-300 mr-2 ' style={{fontSize:"14px"}}/>Jetpack Compose</li>
          </ul>
        </div>

        {/* Cross-Platform Card */}
        <div className="bg-white border  border-gray-200 rounded-xl shadow-sm p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0l-6 6m6-6l6 6m-6-6V6m0 12v2a2 2 0 002 2h4a2 2 0 002-2v-2m-6 0H6a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v10"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl max-sm:text-[18px] font-semibold text-gray-800">
            Cross-Platform
          </h3>
          <ul className="mt-4 text-[18px] max-sm:text-[14px] text-start text-gray-600 max-sm:leading-5 ">
            <li><FiberManualRecordIcon className='text-purple-300 mr-2 ' style={{fontSize:"14px"}}/>React Native</li>
            <li><FiberManualRecordIcon className='text-purple-300 mr-2 ' style={{fontSize:"14px"}}/>Flutter</li>
            <li><FiberManualRecordIcon className='text-purple-300 mr-2 ' style={{fontSize:"14px"}}/>Xamarin</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10  max-sm:text-[14px] text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white  max-sm:py-2 py-3 px-6 max-sm:px-4 rounded-lg">
          Discuss Your Tech Requirements →
        </button>
      </div>
    </div>
  );
}
