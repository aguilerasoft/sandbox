"use client"

import { socialNetworksimg } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <div className="flex justify-center mb-5">
                            <Image src="/Logotipo-Positivo.png" priority width="250" height="250" alt="Logo" />
                        </div>

                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworksimg.map(({ imgSrc, src, id, alt }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                <img src={imgSrc} alt={alt || "social logo"} className="h-11 w-11 object-contain"/>
                            </Link>
                        ))}
                    </div>

                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;