"use client";

import React from "react";

function Section10() {
  return (
    <div className="bg-white lg:py-10 px-6 max-sm:px-1 sm:px-12 lg:px-24">
      <div className="font-bold py-5 max-sm:hidden">Join Us</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Form Section */}
        <div className="bg-gray-50 p-8 rounded-lg text-start   shadow-md">
          <h2 className="text-2xl max-sm:text-center font-bold mb-4 max-sm:mb-2 max-sm:leading-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-600 text-[18px] max-sm:text-center max-sm:text-[14px] leading-6 max-sm:leading-4 mb-6">
            Transform your app idea into reality. We're here to be your
            dedicated development partner.
          </p>
          <form className="space-y-6 p-6 bg-white/50 backdrop-blur-xl rounded-lg shadow-lg border border-white/40">
            <div className="lg:flex lg:justify-between gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-gradient-to-r from-blue-100 to-purple-100 shadow-md focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-gradient-to-r from-blue-100 to-purple-100 shadow-md focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
              />
            </div>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 text-gray-900 rounded-md bg-gradient-to-r from-blue-100 to-purple-100 shadow-md focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
            />

            <textarea
              placeholder="Tell us about your project idea"
              rows="4"
              className="w-full px-4 py-3 text-gray-900 rounded-md bg-gradient-to-r from-blue-100 to-purple-100 shadow-md focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"
            ></textarea>

            <button
              type="submit"
              className="w-full text-sm bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 px-4 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Start Collaboration
            </button>
          </form>


        </div>

        {/* Right Section */}
        <div className="space-y-8 lmt-7 max-sm:mt-1 text-start">
          <div>
            <h3 className="text-2xl max-sm:text-center font-bold mb-4">
              Why Partner With BrainBox Apps?
            </h3>
            <ul className="space-y-4 max-sm:space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/image.png" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h4 className=" max-sm:-mt-1 font-semibold">Dedicated Team</h4>
                  <p className=" text-gray-600 max-sm:leading-4">
                    Your vision becomes our mission. We act as an extension of
                    your team, fully committed to your success.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/image.png" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h4 className="  max-sm:-mt-1 font-semibold">Rapid Development</h4>
                  <p className=" text-gray-600 max-sm:leading-4">
                    Quick turnaround without compromising quality. We help you
                    reach the market faster.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/image.png" className="h-10 w-10" />
                </div>
                <div className="ml-4">
                  <h4 className=" max-sm:-mt-1 font-semibold">Enterprise-Grade Solutions</h4>
                  <p className="text-gray-600 max-sm:leading-4">
                    Scalable, secure, and sophisticated applications built for
                    growth and success.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 space-y-3 p-4 rounded-lg shadow-md">
            <h4 className=" text-blue-800 font-bold mb-2">Quick Connect</h4>
            <p className=" text-gray-600">
              <strong>📞</strong> +1 (000) 111-1111
            </p>
            <p className="  text-gray-600">
              <strong>📧</strong> contact@brainboxapps.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section10;
