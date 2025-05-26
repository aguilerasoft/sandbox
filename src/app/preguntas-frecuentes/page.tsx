"use client"

import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";

const PreguntaFrecuentes = () => {
    return (
        <>
        <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    
                    <span className="font-bold text-secondary">
                       Preguntas{' '} Frecuentes
                    </span>
                </h1>

                

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default PreguntaFrecuentes;