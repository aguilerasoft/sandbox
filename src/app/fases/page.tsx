"use client";

import ContainerPage from "@/components/container-page";
import FasesComponente from "@/components/fases";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
import { motion } from "framer-motion";

const fasesData = [
  {
    icon: "/Icono-Presentacion-de-la-solicitud.png",
    title: "1. Presentación de la solicitud",
    gradientFrom: "#09141a",
    gradientTo: "#2584C8",
    content:
      "Es el periodo para la presentación de los proyectos tecnológicos, en el cual estarán definidos los requisitos y recaudos que debe presentar el interesado.",
  },
  {
    icon: "/Icono-Evaluacion-de-la-Solicitud.png",
    title: "2. Evaluación de la solicitud",
    gradientFrom: "#09141a",
    gradientTo: "#BFE4F5",
    content:
      "Luego de ser recibida la documentación, la Superintendencia de la Actividad Aseguradora, a través del Comité de Evaluación de Proyectos Tecnológicos (CEPTEC), evaluará la solicitud y decidirá la admisión o no del proyecto.",
  },
  {
    icon: "/Icono-Prueba.png",
    title: "3. Pruebas",
    gradientFrom: "#2584C8",
    gradientTo: "#37BCDB",
    content:
      "El proyecto tecnológico ha sido admitido e implementado en el Sandbox Regulatorio para realizar pruebas previamente establecidas en el protocolo de pruebas.",
  },
  {
    icon: "/Icono-Salida.png",
    title: "4. Salida",
    gradientFrom: "#262857",
    gradientTo: "#2584C8",
    content:
      "La Sudeaseg emite su pronunciamiento sobre el resultado de la prueba, aprobando o desestimando el proyecto tecnológico.",
  },
];

const Fases = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl mb-8">
          <span className="font-bold text-secondary">Fases</span>
        </h1>

        {fasesData.map((fase, index) => (
          <motion.div
            key={fase.title}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 1 }}
            className="mb-8"
          >
            <FasesComponente
              icon={fase.icon}
              title={fase.title}
              gradientFrom={fase.gradientFrom}
              gradientTo={fase.gradientTo}
              content={fase.content}
            />
          </motion.div>
        ))}

        <div className="mb-20"></div>
      </ContainerPage>
    </>
  );
};

export default Fases;
