"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/Elemento-Decorativo-Derecha-a-Izquierda-Grande.png" width="200" height="200" className="" alt="Particles " />
            
        </MotionTransition>
        
    )
}