"use client"

import { CoverParticles } from "@/components/cover-particles";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <TransitionPage />
        <ContainerPage> {/* Añadido padding vertical */}
           <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl">
                    
                    <span className="font-bold text-secondary">
                       Quiénes somos
                    </span>
                </h1>
          <div className="flex flex-col gap-20 relative mt-10"> {/* Espacio uniforme entre secciones */}
            
            {/* Primera sección */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-1 md:order-1">
                <Image 
                  src="/Foto-Sandbox-1.png"
                  alt="Descripción imagen 1"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                
              </div>
              <div className="order-2 md:order-2">
                <h2 className="text-3xl font-bold mb-6">¿Qué es el Ambiente de Prueba <br /> Sudeaseg o SandBox Regulatorio?</h2>
                <p className="text-lg leading-relaxed">
                Mecanismo exploratorio de regulación flexible que permite a las personas naturales y jurídicas probar productos, servicios, métodos de organización y modelos de negocio innovadores, con incidencia en la actividad aseguradora, en un espacio controlado y periodo temporal, sin incurrir inmediatamente en todas las consecuencias jurídicas propias de participar en dicha actividad.
                </p>
              </div>
            </section>

            {/* Segunda sección (imagen invertida) */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-1 md:order-2">
                <Image 
                  src="/Foto-Sandbox-2.png"
                  alt="Descripción imagen 2"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">¿Para qué se usa?</h2>
                <p className="text-lg leading-relaxed">
                El objetivo principal es transformar el mercado asegurador venezolano, fomentando la adopción de tecnología segura, eficaz y eficiente, con la finalidad de tener un mayor alcance en la población venezolana, gestionar mejor los riesgos, mejorar la calidad de vida de los ciudadanos, crear nuevas oportunidades de negocios y novedosas formas de comercialización de los productos.
                </p>
              </div>
            </section>

            {/* Espaciado inferior adicional */}
            <div className="h-20"></div>
          </div>
        </ContainerPage>
      </div>
    </main>
  );
}