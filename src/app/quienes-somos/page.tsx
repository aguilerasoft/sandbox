"use client"

import { CoverParticles } from "@/components/cover-particles";
//import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                Quienes Somos 
            </div>
        </div>
      </div>
    </main>
  );
}