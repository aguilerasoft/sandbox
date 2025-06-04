"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const router = usePathname();
    const [tooltip, setTooltip] = useState({ visible: false, text: '' });

    const handleMouseEnter = (text:string) => {
        setTooltip({ visible: true, text });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, text: '' });
    };

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#788f90] background-blur-sm relative">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`relative px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-[#2098CC] ${router === item.link && 'bg-[#2098CC]'}`}
                            onMouseEnter={() => handleMouseEnter(item.title)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link href={item.link}>{item.icon}</Link>
                            {tooltip.visible && tooltip.text === item.title && (
                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded-md p-1 shadow-lg whitespace-nowrap">
                                {tooltip.text}
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;
