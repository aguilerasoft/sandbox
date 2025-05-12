import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RecaudosComponenteProps {
  image?: string;
  content: string;
  icon: string;
  modalContent?: string; // Nuevo contenido para el modal
  gradientFrom?: string;
  gradientTo?: string;
  bgColor?: string;
  textColor?: string;
  rounded?: string;
  buttonText?: string;
}

const RecaudosComponente: React.FC<RecaudosComponenteProps> = ({
  image,
  content = "",
  icon = "/hola.png",
  modalContent = "", // Contenido adicional para el modal
  gradientFrom = "#2DC9E0",
  gradientTo = "#4DB3E6",
  bgColor = "#0D0D0D",
  textColor = "white",
  rounded = "xl",
  buttonText = "Leer más" // Texto del botón
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative`}>
        <div 
          className={`bg-[${bgColor}] rounded-${rounded} shadow-lg overflow-hidden`}
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Imagen a la izquierda */}
            {image && (
              <div className="flex justify-center items-center ml-5">
              <img
                src={image}
                alt="Contenido visual"
                className=""
                width={100}
                height={100}
              />
            </div>
            )}

            {/* Contenido principal */}
            <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div 
                className={`text-${textColor} text-lg md:text-xl leading-relaxed md:leading-snug`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              {/* Botón para abrir modal */}
              {modalContent && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] text-white font-medium hover:opacity-90 transition-opacity self-start`}
                >
                  {buttonText}
                </button>
              )}
            </div>

            {/* Icono decorativo */}
            <div 
              className={`w-full md:w-[240px] h-[200px] md:h-auto bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] flex items-center justify-center p-6`}
              style={{ 
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` 
              }}
            >
              <div className="animate-spin-slow">
                            
                              <img
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

      {/* Modal */}
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`bg-[${bgColor}] rounded-${rounded} max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8`}
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: bgColor }}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div 
              className={`text-${textColor} text-lg`}
              dangerouslySetInnerHTML={{ __html: modalContent || content }}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default RecaudosComponente;