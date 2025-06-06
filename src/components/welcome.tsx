"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Opcional: Cerrar automáticamente después de 5 segundos
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-opacity-50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative max-w-2xl w-full p-8 rounded-xl"
            style={{
              backgroundColor: 'rgba(2, 25, 35, 0.85)', // #021923 con 85% de opacidad
              border: '1px solid rgba(100, 210, 255, 0.3)',
              boxShadow: '0 0 30px rgba(0, 180, 255, 0.2)'
            }}
          >
            {/* Efectos de partículas o líneas futuristas */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2098cc] to-transparent animate-pulse"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2098cc] to-transparent opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2098cc] to-transparent animate-pulse"></div>
            </div>

            {/* Contenido del modal */}
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2098cc] to-[#2098cc]">
                Bienvenido al SandBox Regulatorio 
              </h2>
              
              <div className="mb-6 text-cyan-100">
                <p className="mb-4 text-lg">Te ofrecemos un contexto claro sobre su funcionamiento. Explora la información disponible y mantente atento a las futuras actualizaciones</p>
                <p className="text-sm opacity-80">Un espacio seguro para la innovación</p>
              </div>

              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#2098cc] to-[#2098cc] text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Iniciar Viaje
                </motion.button>
              </div>
            </div>

            {/* Efecto de esquina futurista */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#2098cc] opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#2098cc] opacity-70"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}