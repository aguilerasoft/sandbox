"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import RecaudosComponente from "@/components/recaudos";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";

const Recaudos = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPage />
      <ContainerPage>



        <RecaudosComponente
          image="/Icono-Circulo-1.png"
          icon="/Icono-1.1-1.png"
          content="Si es persona natural, nombre y apellido, cédula de identidad, pasaporte, registro único de información fiscal (RIF), teléfono principal, fecha de nacimiento, nacionalidad, estado civil, dirección de habitación y correo electrónico principal."
        />
        <RecaudosComponente

          icon="/Icono-1.2-1.png"
          image="/Icono-Circulo-2.png"
          gradientFrom="#8ed8f9"
          gradientTo="#8ed8f9"
          content="Si es persona jurídica, razón social, registro único de información fiscal (RIF), dirección, correo electrónico, página web (opcional). Adicionalmente, los datos del representante legal (nombre, apellido, cédula de identidad, pasaporte, registro único de información fiscal (RIF), teléfono principal, fecha de nacimiento, nacionalidad, estado civil, dirección de habitación y correo electrónico principal)."
        />


        <RecaudosComponente
          icon="/Icono-1.3-1.png"
          image="/Icono-Circulo-3.png"
          content="Descripción del proyecto: <br />
            • Título del proyecto.<br />
            • Objetivo del proyecto.<br />
            • Breve descripción del proyecto.<br />
            • Evolución esperada del proyecto a mediano plazo (opcional). <br />
            "
          modalContent="
                    • Experiencia del que propone el proyecto (opcional). <br /> <br /> 
                    • Mención de las tecnologías utilizadas (Inteligencia Artificial (Artificial Intelligence), Cadena de bloques (Blockchain), Biometría, Computación en la nube (Cloud Computing), Internet de las cosas (Internet of Things) / (Edge Computing), otras (indique cuales). <br /> <br />
                    • Descripción de las características de la infraestructura tecnológica previstas en el proyecto. Adicionalmente debe incluir los aspectos técnicos de implementación, de conformidad al Anexo 1. <br /> <br />
                    • Diagrama de red, flujo del sistema de aplicación, diagrama de base de datos, metodología utilizada en el desarrollo, diagrama de procesos, manual de usuario técnico y manual de usuario final. <br /> <br />
                    • Beneficio para la actividad aseguradora. <br /> <br />
                    • Valor agregado a la actividad aseguradora. <br /> <br />
                    • Ventajas y desventajas. <br /> <br />
                    • Riesgos del proyecto. <br /> <br />
                    • Mención de posibles barreras en la regulación vigente en materia aseguradora, tecnológica u otra, que imposibiliten la implementación del proyecto en la actualidad. Mencione cada una de las normativas."
          buttonText="Ver detalles completos"
        />


        <RecaudosComponente
          icon="/Icono-1.4-1.png"
          image="/Icono-Circulo-4.png"
          gradientFrom="#8ed8f9"
          gradientTo="#8ed8f9"
          content="Reglamento Actuarial o mención de las Providencias previamente aprobadas de los productos usados en el proyecto, de ser el caso."
        />
        <RecaudosComponente
          icon="/Icono-1.5-1.png"
          image="/Icono-Circulo-5.png"
       
          content="Declaración jurada de autenticidad, donde señale que el proyecto suministrado es propio y que el solicitante autoriza la verificación por parte de esta Superintendencia de la Actividad Aseguradora de los datos suministrados."
        />
        <RecaudosComponente
          icon="/Icono-1.6-1.png"
          image="/Icono-Circulo-6.png"
          gradientFrom="#8ed8f9"
          gradientTo="#8ed8f9"
          content="Declaración jurada de no estar incurso en ninguno de los supuestos de incompatibilidad e impedimentos establecidos en la Ley de la Actividad Aseguradora, su reglamento y las normas dictadas al efecto."
        />
        <RecaudosComponente
          icon="/Icono-1.7-1.png"
          image="/Icono-1.7.png"
          
          content="Declaración jurada de que los fondos utilizados en la elaboración del proyecto que se presenta provienen de fuente lícita. Si el proyecto fue financiado por una persona jurídica calificada como sujeto regulado, esta deberá cumplir con las Normas sobre Administración de Riesgos de Legitimación de Capitales, Financiamiento al Terrorismo, Financiamiento de la Proliferación de Armas de Destrucción Masiva y Otros Ilícitos en la Actividad Aseguradora."
        />

        <div className="mb-20"></div>


      </ContainerPage>
    </>
  );
}

export default Recaudos;