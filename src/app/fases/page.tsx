"use client"

import { Avatar } from "@/components/avatar";
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
        <Avatar />


        <FasesComponente
          title="Prueba"
          icon="/Icono-Prueba.png"
          content="El proyecto tecnológico ha ingresado al Sandbox Regulatorio Sudeaseg y es probado por este Órgano de Control bajos criterios previamente establecidos."
        />
        <FasesComponente

          icon="/Icono-Presentacion-de-la-solicitud.png"
          title="Presentación de la Solicitud"
          gradientFrom="#8ed8f9"
          gradientTo="#8ed8f9"
          content="Es el periodo para la presentación de los proyectos tecnológicos, en el cual estarán definidos los requisitos y recaudos que debe presentar el interesado."
        />
        <FasesComponente
          icon="/Icono-Evaluacion-de-la-Solicitud.png"
          title="Evaluación de la Solicitud"
          content="Luego de ser recibida la documentación, la Superintendencia de la Actividad Aseguradora, a través del Comité de Evaluación de Proyectos Tecnológicos (CEPTEC), evaluará la solicitud y decidirá la admisión o no del proyecto."
        />
        <FasesComponente
          icon="/Icono-Salida.png"
          title="Salida"
          gradientFrom="#8ed8f9"
          gradientTo="#8ed8f9"
          content="La Sudeaseg emitirá su pronunciamiento sobre el resultado de las pruebas, aprobando o desestimando el proyecto tecnológico."
        />

        <div className="mb-20"></div>


      </ContainerPage>
    </>
  );
}

export default Fases;