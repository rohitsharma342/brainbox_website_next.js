import React from 'react';

function Section6() {
  return (
    <div className=" py-12">
      <div className="text-center">
        <h2 className="lg:text-3xl font-bold text-gray-800">Innovation Lab</h2>
        <p className="mt-2 max-sm:mt-1 text-[18px] max-sm:text-sm  text-gray-600">
          Exploring cutting-edge technologies to shape the future of mobile applications
        </p>
      </div>
      <div className="mt-12 max-sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:p-2  md:px-12">
        {/* Card 1 */}
        <div className="text-start rounded-lg hover:shadow-lg p-4 bg-white border border-gray-200 lg:pb-10">
          <div className=" lg:mb-4">
          <img src='/image.png' className='h-10 w-10'/>
            <h3 className=" text-xl mt-4 max-sm:mt-2 font-semibold text-gray-800">AI & Machine Learning</h3>
          </div>
          <p className="text-gray-600 text-[16px] max-sm:text-[14px] leading-6 max-sm:leading-5 mb-4">
            Implementing advanced AI algorithms for personalized user experiences and intelligent
            feature optimization. Implementing advanced AI algorithms for personalized user experiences and intelligent
            feature optimization.
          </p>
          <ul className="text-gray-600 text-sm font-semibold lg:space-y-2">
            <li>✔️ Natural Language Processing</li>
            <li>✔️ Computer Vision</li>
            <li>✔️ Predictive Analytics</li>
          </ul>
        </div>
        {/* Card 2 */}
        <div className="text-start rounded-lg hover:shadow-lg p-4 bg-white border border-gray-200 lg:pb-10">
          <div className=" lg:mb-4">
          <img src='/image.png' className='h-10 w-10'/>
            <h3 className=" text-xl mt-4 max-sm:mt-2 font-semibold text-gray-800">AI & Machine Learning</h3>
          </div>
          <p className="text-gray-600 text-[16px] max-sm:text-[14px] leading-6 max-sm:leading-5 mb-4">
            Implementing advanced AI algorithms for personalized user experiences and intelligent
            feature optimization. Implementing advanced AI algorithms for personalized user experiences and intelligent
            feature optimization.
          </p>
          <ul className="text-gray-600 text-sm font-semibold lg:space-y-2">
            <li>✔️ Natural Language Processing</li>
            <li>✔️ Computer Vision</li>
            <li>✔️ Predictive Analytics</li>
          </ul>
        </div>
        {/* Card 3 */}
        <div className="text-start rounded-lg hover:shadow-lg p-4 bg-white border border-gray-200 lg:pb-10">
          <div className=" lg:mb-4">
          <img src='/image.png' className='h-10 w-10'/>
            <h3 className=" text-xl mt-4 max-sm:mt-2 font-semibold text-gray-800">AI & Machine Learning</h3>
          </div>
          <p className="text-gray-600 text-[16px] max-sm:text-[14px] leading-6 max-sm:leading-5 mb-4">
            Implementing advanced AI algorithms for personalized user experiences and intelligent
            feature optimization. Implementing advanced AI algorithms for personalized user experiences and intelligent
            feature optimization.
          </p>
          <ul className="text-gray-600 text-sm font-semibold lg:space-y-2">
            <li>✔️ Natural Language Processing</li>
            <li>✔️ Computer Vision</li>
            <li>✔️ Predictive Analytics</li>
          </ul>
        </div>
      </div>
      {/* Statistics */}
      <div className="mt-12 max-sm:mt-6 max-sm:px-2 flex justify-between lg:px-60 text-center text-gray-800">
        <div>
          <h4 className="text-3xl max-sm:text-xl font-bold max-sm:font-semibold text-blue-700">15+</h4>
          <p className="text-gray-600 text-sm">Research Papers</p>
        </div>
        <div>
          <h4 className="text-3xl max-sm:text-xl font-bold max-sm:font-semibold text-blue-700">25+</h4>
          <p className="text-gray-600 text-sm">Patents Filed</p>
        </div>
        <div>
          <h4 className="text-3xl max-sm:text-xl font-bold max-sm:font-semibold text-blue-700">40+</h4>
          <p className="text-gray-600 text-sm">Prototypes</p>
        </div>
        <div>
          <h4 className="text-3xl max-sm:text-xl font-bold max-sm:font-semibold text-blue-700">10+</h4>
          <p className="text-gray-600 text-sm">Industry Partners</p>
        </div>
      </div>
      <hr className='lg:mt-20 max-sm:mt-10'/>
    </div>
  );
}

export default Section6;
