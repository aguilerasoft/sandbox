"use client";

import ContainerPage from "@/components/container-page";
import RecaudosComponente from "@/components/recaudos";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
import { motion } from "framer-motion";

const recaudosData = [
  {
    image: "/Icono-Circulo-1.png",
    icon: "/Icono-1.1-1.png",
    gradientFrom: "#09141a",
    gradientTo: "#2584C8",
    content:
      "Si es persona natural, nombre y apellido, cédula de identidad, pasaporte, registro único de información fiscal (RIF), teléfono principal, fecha de nacimiento, nacionalidad, estado civil, dirección de habitación, correo electrónico principal.",
  },
  {
    image: "/Icono-Circulo-2.png",
    icon: "/Icono-1.2-1.png",
    gradientFrom: "#09141a",
    gradientTo: "#BFE4F5",
    content:
      "Si es persona jurídica, razón social, registro único de información fiscal (RIF), dirección, correo electrónico, página web (opcional). Adicionalmente, los datos del representante legal (nombre, apellido, cédula de identidad, pasaporte, registro único de información fiscal (RIF), teléfono principal, fecha de nacimiento, nacionalidad, estado civil, dirección de habitación y correo electrónico principal).",
  },
  {
    image: "/Icono-Circulo-3.png",
    icon: "/Icono-1.3-1.png",
    gradientFrom: "#2584C8",
    gradientTo: "#37BCDB",
    content:
      "• Título del proyecto.<br />" +
      "• Objetivo y alcance del proyecto.<br />" +
      "• Breve descripción del proyecto.<br />" +
      "• Evolución esperada del proyecto a mediano plazo (opcional). <br />" +
      "• Experiencia del que propone el proyecto (opcional). <br />",
    modalContent:
      "• Título del proyecto.<br /> <br />" +
      "• Objetivo y alcance del proyecto.<br /> <br />" +
      "• Breve descripción del proyecto.<br /> <br />" +
      "• Evolución esperada del proyecto a mediano plazo (opcional). <br /> <br />" +
      "• Experiencia del que propone el proyecto (opcional). <br /> <br />" +
      "• Si ha realizado pruebas, indique cuáles, el periodo de ejecución y los resultados obtenidos. <br /> <br />" +
      "• Indique el plan de pruebas que pretende aplicar. <br /> <br />" +
      "• Mención de las tecnologías utilizadas (Inteligencia Artificial (Artificial Intelligence), Cadena de bloques (Blockchain), Biometría, Computación en la nube (Cloud Computing), Internet de las cosas (Internet of Things) / (Edge Computing), otras (indique cuales)). <br /> <br />" +
      "• Descripción de las características de la infraestructura tecnológica previstas en el proyecto. Adicionalmente debe incluir los aspectos técnicos de implementación, de conformidad al siguiente <a class='text-[#2098cc] hover:text-[#2098cd]' href='/pdf/Brochure Anexo Sandbox.pdf'>Anexo.</a> <br /> <br />" +
      "• Diagrama de red, flujo del sistema de aplicación, diagrama de base de datos, metodología utilizada en el desarrollo, diagrama de procesos, manual de usuario técnico y manual de usuario final. <br /> <br />" +
      "• Mecanismos de seguridad y protección de datos. <br /> <br />" +
      "• Beneficio para la actividad aseguradora. <br /> <br />" +
      "• Valor agregado a la actividad aseguradora.  <br /> <br />" +
      "• Ventajas y desventajas.  <br /> <br />" +
      "• Riesgos del proyecto.  <br /> <br />" +
      "• Mención de posibles barreras en la regulación vigente en materia aseguradora, tecnológica u otra, que imposibiliten la implementación del proyecto en la actualidad. Mencione cada una de las normativas.  <br /> <br />",
    buttonText: "Ver detalles completos",
  },
  {
    image: "/Icono-Circulo-4.png",
    icon: "/Icono-1.4-1.png",
    gradientFrom: "#262857",
    gradientTo: "#2584C8",
    content:
      "Reglamento Actuarial o mención de las Providencias previamente aprobadas de los productos usados en el proyecto, de ser el caso.",
  },
  {
    image: "/Icono-Circulo-5.png",
    icon: "/Icono-1.5-1.png",
    gradientFrom: "#09141a",
    gradientTo: "#BFE4F5",
    content:
      "Declaración jurada de autenticidad, donde señale que el proyecto suministrado es propio y que el solicitante autoriza la verificación por parte de esta Superintendencia de la Actividad Aseguradora de los datos suministrados.",
  },
  {
    image: "/Icono-Circulo-6.png",
    icon: "/Icono-1.6-1.png",
    gradientFrom: "#2584C8",
    gradientTo: "#37BCDB",
    content:
      "Declaración jurada de no estar incurso en ninguno de los supuestos de incompatibilidad e impedimentos establecidos en la Ley de la Actividad Aseguradora, su reglamento y las normas dictadas al efecto.",
  },
  {
    image: "/Icono-1.7.png",
    icon: "/Icono-1.7-1.png",
    gradientFrom: "#09141a",
    gradientTo: "#2584C8",
    content:
      "Declaración jurada de que los fondos utilizados en la elaboración del proyecto que se presenta provienen de fuente lícita. Si el proyecto fue financiado por una persona jurídica calificada como sujeto regulado, esta deberá cumplir con las Normas sobre Administración de Riesgos de Legitimación de Capitales, Financiamiento al Terrorismo, Financiamiento de la Proliferación de Armas de Destrucción Masiva y Otros Ilícitos en la Actividad Aseguradora.",
  },
];

const Recaudos = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl mb-8">
          <span className="font-bold text-secondary">Recaudos</span>
        </h1>

        {recaudosData.map((item, index) => (
          <motion.div
            key={item.icon + index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.5 }}
            className="mb-8"
          >
            <RecaudosComponente
              image={item.image}
              icon={item.icon}
              gradientFrom={item.gradientFrom}
              gradientTo={item.gradientTo}
              content={item.content}
              modalContent={item.modalContent}
              buttonText={item.buttonText}
            />
          </motion.div>
        ))}

        <div className="mb-20"></div>
      </ContainerPage>
    </>
  );
};

export default Recaudos;
