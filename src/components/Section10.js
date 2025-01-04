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
          <form className="space-y-4 ">
            <div className="lg:flex lg:justify-between">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                className="mt-1   text-sm block w-[270px] max-sm:w-[340px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm max-sm:mt-3 font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="mt-1  block text-sm w-[270px] max-sm:w-[340px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            </div>
           
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="Your Company"
                className="mt-1 block text-sm w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Project Description
              </label>
              <textarea
                id="projectDescription"
                placeholder="Tell us about your project idea"
                rows="4"
                className="mt-1 text-sm block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-sm bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition"
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
                 <img src="/image.png" className="h-10 w-10"/>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm max-sm:-mt-1 font-semibold">Dedicated Team</h4>
                  <p className="text-sm text-gray-600 max-sm:leading-4">
                    Your vision becomes our mission. We act as an extension of
                    your team, fully committed to your success.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                <img src="/image.png" className="h-10 w-10"/>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm  max-sm:-mt-1 font-semibold">Rapid Development</h4>
                  <p className="text-sm text-gray-600 max-sm:leading-4">
                    Quick turnaround without compromising quality. We help you
                    reach the market faster.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                <img src="/image.png" className="h-10 w-10"/>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm  max-sm:-mt-1 font-semibold">Enterprise-Grade Solutions</h4>
                  <p className="text-sm text-gray-600 max-sm:leading-4">
                    Scalable, secure, and sophisticated applications built for
                    growth and success.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 space-y-3 p-4 rounded-lg shadow-md">
            <h4 className="text-sm text-blue-800 font-bold mb-2">Quick Connect</h4>
            <p className="text-sm text-gray-600">
              <strong>📞</strong> +1 (000) 111-1111
            </p>
            <p className="text-sm  text-gray-600">
              <strong>📧</strong> contact@brainboxapps.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section10;
