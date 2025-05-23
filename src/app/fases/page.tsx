"use client"

import ContainerPage from "@/components/container-page";
import FasesComponente from "@/components/fases";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";

const Fases = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPage />
      <ContainerPage>
       

         <FasesComponente

          icon="/Icono-Presentacion-de-la-solicitud.png"
          title="Presentación de la solicitud"
          gradientFrom="#09141a"
          gradientTo="#2584C8"
          content="es el periodo para la presentación de los proyectos tecnológicos, en el cual estarán definidos los requisitos y recaudos que debe presentar el interesado."
        />

         <FasesComponente
          icon="/Icono-Evaluacion-de-la-Solicitud.png"
          title="Evaluación de la solicitud"
          gradientFrom="#09141a"
          gradientTo="#BFE4F5"
          content="Luego de ser recibida la documentación, la Superintendencia de la Actividad Aseguradora, a través del Comité de Evaluación de Proyectos Tecnológicos (CEPTEC), evaluará la solicitud y decidirá la admisión o no del proyecto."
        />
        <FasesComponente
          title="Prueba"
          gradientFrom="#2584C8"
          gradientTo="#37BCDB"
          icon="/Icono-Prueba.png"
          content="El proyecto tecnológico ha sido admitido e implementado en el Sandbox Regulatorio para realizar pruebas previamente establecidas en el protocolo de pruebas."
        />
       
       
        <FasesComponente
          icon="/Icono-Salida.png"
          title="Salida"
          gradientFrom="#262857"
          gradientTo="#2584C8"
          content="La Sudeaseg emite su pronunciamiento sobre el resultado de la prueba, aprobando o desestimando el proyecto tecnológico."
        />

        <div className="mb-20"></div>


      </ContainerPage>
    </>
  );
}

export default Fases;