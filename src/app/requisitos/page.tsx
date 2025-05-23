"use client";

import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Requisitos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Datos para las secciones
  const sections = [
    {
      id: 1,
      title: "1",
      icon: "/Icono-Circulo-1.png",
      content: "Podrá acceder cualquier persona natural o jurídica que, de forma individual o conjunta con otras, solicite el ingreso de un proyecto tecnológico propio en materia de la actividad aseguradora.",
      isLong: false
    },
    {
      id: 2,
      title: "2",
      icon: "/Icono-Circulo-2.png",
      content: "El proyecto debe encontrarse suficientemente avanzado de tal manera que pueda probarse, es decir, que contenga al menos un producto mínimo viable para comprobar su utilidad y viabilidad.",
      isLong: false
    },
    {
      id: 3,
      title: "3",
      icon: "/Icono-Circulo-3.png",
      content: "El proyecto debe aportar, a criterio de esta Superintendencia de la Actividad Aseguradora, potencial utilidad o valor agregado en al menos uno de los siguientes aspectos: <br><br> • Beneficiar a los Tomadores, Asegurados, Beneficiarios, Contratantes, Usuarios y Afiliados de la actividad aseguradora, en términos de mejora, accesibilidad, incentivo a la competencia, disponibilidad de los productos o servicios ofrecidos, disminución de las primas, cuotas, gastos administrativos o incremento en la protección de los derechos de los Tomadores, Asegurados, Beneficiarios, Contratantes, Usuarios y Afiliados. <br> <br> • Facilitar el cumplimiento de las normativas vigentes en materia de la actividad aseguradora. <br> <br> • Proveer métodos o mecanismos para mejorar la regulación del mercado asegurador. <br> <br> • Aumentar la eficiencia del mercado de la actividad aseguradora.",
      isLong: true
    },
    {
      id: 4,
      title: "4",
      icon: "/Icono-Circulo-4.png",
      content: "Si el solicitante no es un sujeto regulado deberá remitir los documentos donde se pueda verificar el cumplimiento de las de las normas en materia de administración de riesgos de legitimación de capitales, financiamiento al terrorismo y financiamiento a la proliferación de armas de destrucción masiva que le sean aplicables. En caso de no poseerlos, deberá remitir un plan estratégico para el cumplimiento de las mencionadas normas.",
      isLong: true
    },
    {
      id: 5,
      title: "5",
      icon: "/Icono-Circulo-5.png",
      content: "Los proyectos que se consignen en un idioma diferente al castellano, deberán ser presentados en su idioma original junto con su traducción al castellano.",
      isLong: false
    },
    {
      id: 6,
      title: "6",
      icon: "/Icono-Circulo-6.png",
      content: "Aceptar el acuerdo de confidencialidad y las respectivas declaraciones juradas.",
      isLong: false
    },
  ];

  const openModal = (content: string) => {
    setCurrentContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="relative">
      <TransitionPage />
      <ContainerPage>
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
          <CoverParticles />
          
          {/* Contenedor principal centrado */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-4 py-20 md:py-0">
            {/* Contenedor para el círculo y las secciones */}
            <div className="relative w-full h-full max-w-5xl max-h-5xl">
              {/* Círculo con imagen - centrado */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-40 h-40 hidden' : 'w-72 h-72'} group z-20`}>
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl transition-all duration-300 group-hover:border-indigo-600 group-hover:shadow-2xl">
                  <Image
                    src="/ISOTIPO SANDBOX.png"
                    alt="Perfil"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              {/* Secciones alrededor del círculo */}
              {sections.map((section, index) => {
                if (isMobile) {
                  // Mobile layout - vertical list
                  return (
                    <div 
                      key={section.id}
                      className={`relative w-full md:w-72 bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 shadow-lg transition-all duration-500 hover:bg-white/20 hover:shadow-xl z-10 hover:scale-105 mb-4 mx-auto`}
                    >
                      <div className="mb-3 md:mb-5 flex justify-center items-center">
                        <Image src={section.icon} alt="" width={isMobile ? 60 : 100} height={isMobile ? 60 : 100}/>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        {section.isLong ? (
                          <>
                            <div className="max-h-24 overflow-hidden relative">
                              <div dangerouslySetInnerHTML={{ __html: section.content.substring(0, 100) + "..." }} />
                              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
                            </div>
                            <button 
                              onClick={() => openModal(section.content)}
                              className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                            >
                              Leer más
                            </button>
                          </>
                        ) : (
                          <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        )}
                      </div>
                    </div>
                  );
                } else {
                  // Desktop layout - circular arrangement
                  const angle = (index * 60) - 60;
                  const radius = 380;
                  const x = radius * Math.cos(angle * Math.PI / 180);
                  const y = radius * Math.sin(angle * Math.PI / 180);
                  
                  return (
                    <div 
                      key={section.id}
                      className={`absolute w-72 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg transition-all duration-500 hover:bg-white/20 hover:shadow-xl z-10 hover:scale-105`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className="mb-5 flex justify-center items-center">
                        <Image src={section.icon} alt="" width={100} height={100}/>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        {section.isLong ? (
                          <>
                            <div className="max-h-24 overflow-hidden relative">
                              <div dangerouslySetInnerHTML={{ __html: section.content.substring(0, 150) + "..." }} />
                              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
                            </div>
                            <button 
                              onClick={() => openModal(section.content)}
                              className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                            >
                              Leer más
                            </button>
                          </>
                        ) : (
                          <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="h-dvh md:h-80"></div>
      </ContainerPage>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="prose prose-invert text-gray-300"
              dangerouslySetInnerHTML={{ __html: currentContent }}
            />
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}