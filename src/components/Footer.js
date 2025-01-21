"use client";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-1 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-bold">BrainBox Apps</h3>
            <p className="text-[16px] text-gray-600 mt-2">
              Transforming innovative ideas into powerful mobile applications. Your trusted partner in digital transformation and mobile app development.
            </p>
            <div className='text-gray-400 space-x-5 mt-3'>
                <a href='#' className='hover:text-blue-600'><InstagramIcon/></a>
                <a href='#'className='hover:text-blue-600'><TwitterIcon/></a>
                <a href='#' className='hover:text-blue-600'><LinkedInIcon/></a>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-500">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className='lg:ml-40 max-sm:px-1'>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 max-sm:mt-2 space-y-2 max-sm:space-y-1 text-sm">
              <li><a href="#" className="text-gray-600 hover:underline">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Portfolio</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className='lg:ml-40 max-sm:px-1'>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="mt-4 max-sm:mt-2 space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:underline">Rapid Prototyping</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Product Development</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Product Consulting</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Digital Innovation</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Enterprise Solutions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-600">
            © 2024 BrainBox Apps. All rights reserved.
              
            </div>
           
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-4">
            <a href="#" className="text-gray-600 hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:underline">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
