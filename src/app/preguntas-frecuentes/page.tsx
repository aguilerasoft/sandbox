"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";

const AboutMePage = () => {
    return (
        <>
        <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Preguntas{' '}
                    <span className="font-bold text-secondary">
                        Fecuentes
                    </span>
                </h1>

                

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;