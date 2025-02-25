'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <nav className="bg-white border w-full">
      <div className="container mx-auto flex justify-between items-center py-0 px-40">
        {/* Logo Section */}
        <Link href={"/"}  className="text-[25px] flex font-bold text-gray-900">
          BrainBox Apps
        </Link>

        {/* Menu Links */}
        <Menu setActive={setActive}>
          <ul className="flex gap-14 text-md font-medium hover:text-blue-700">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Process">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/discovery">Discovery</HoveredLink>
                <HoveredLink href="/planning">Planning</HoveredLink>
                <HoveredLink href="/execution">Execution</HoveredLink>
                <HoveredLink href="/delivery">Delivery</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Work">
              <div className="grid grid-cols-2 gap-10 text-sm">
                <ProductItem
                  title="Project A"
                  href="/project-a"
                  src="/company.png"
                  description="Description for Project A"
                />
                <ProductItem
                  title="Project B"
                  href="/project-b"
                  src="/company.png"
                  description="Description for Project B"
                />
                <ProductItem
                  title="Project C"
                  href="/project-c"
                  src="/company.png"
                  description="Description for Project C"
                />
                <ProductItem
                  title="Project D"
                  href="/project-d"
                  src="/company.png"
                  description="Description for Project D"
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/team">Our Team</HoveredLink>
                <HoveredLink href="/vision">Our Vision</HoveredLink>
                <HoveredLink href="/careers">Careers</HoveredLink>
              </div>
            </MenuItem>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition">
                Blog
              </Link>
            </li>
            <button  className="bg-blue-600 text-white text-sm font-medium px-5 py-2 -mt-1 rounded-md hover:bg-blue-700">
            Free
          </button>
          </ul>
        </Menu>

        {/* Buttons Section */}

          <button className="bg-blue-600 text-white text-sm font-medium px-5 py-2 -mt-1 rounded-md hover:bg-blue-700">
            Start Your Project
          </button>
         
       
      </div>
    </nav>
  );
}

export default Navbar;
