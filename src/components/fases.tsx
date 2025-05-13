
import React from 'react';
import Image from 'next/image';

interface FasesComponenteProps {
  title: string;
  content: string;
  icon: string; // Puede ser un SVG o elemento JSX
  gradientFrom?: string;
  gradientTo?: string;
  bgColor?: string;
  textColor?: string;
  rounded?: string;
}

const FasesComponente: React.FC<FasesComponenteProps> = ({
  title = "Prueba",
  content = "El proyecto tecnológico ha ingresado al Sandbox Regulatorio Sudeaseg y es probado por este Órgano de Control bajos criterios previamente establecidos.",
  icon = "/hola.pn",
  gradientFrom = "#2DC9E0",
  gradientTo = "#4DB3E6",
  bgColor = "#0D0D0D",
  textColor = "white",
  rounded = "xl"
}) => {
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative`}>
      <div 
        className={`bg-[${bgColor}] rounded-${rounded} shadow-lg overflow-hidden`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Contenido de texto */}
          <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="mb-6 md:mb-8">
              <div 
                className={`bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] px-6 py-3 inline-block rounded-lg`}
                style={{ 
                  background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` 
                }}
              >
                <p className={`text-${textColor} italic font-bold text-xl md:text-2xl`}>
                  {title}
                </p>
              </div>
            </div>
            <p className={`text-${textColor} text-lg md:text-xl leading-relaxed md:leading-snug`}>
              {content}
            </p>
          </div>

          {/* Icono decorativo */}
          <div 
            className={`w-full md:w-[240px] h-[200px] md:h-auto bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] flex items-center justify-center p-6`}
            style={{ 
              background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` 
            }}
          >
            <div className="animate-spin-slow">
              
                <Image
                src={icon}
                alt="Perfil"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={100}
                height={100}
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FasesComponente;