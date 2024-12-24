'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Home from "@/app/page";

function Navbar({ className }) {
    const [active, setActive] = useState(null);

    return (
        <div className={cn("fixed  top-0  w-full   z-50", className)}>
            <Menu setActive={setActive} >

              
                    <MenuItem setActive={setActive} active={active} item="Service">
                    <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/process">Process</HoveredLink>
                            <HoveredLink href="/work">Work</HoveredLink>
                            <HoveredLink href="/about">About</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Process" >
                        
                      
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Work" >
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/process">Process</HoveredLink>
                           
                        </div>
                      
                       

                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="About" >
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/process">Process</HoveredLink>
                            <HoveredLink href="/work">Work</HoveredLink>
                            <HoveredLink href="/about">About</HoveredLink>
                        </div>
                      
                       

                    </MenuItem>
                
            </Menu>
        </div>
    );
}

export default Navbar;
