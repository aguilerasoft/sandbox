import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60 relative overflow-hidden">
            {/* Efecto de fondo decorativo */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-30"></div>
            
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 max-w-7xl mx-auto">
                {/* Sección izquierda - Video de YouTube */}
                <div className="order-2 md:order-1 mx-auto w-full max-w-[560px] relative">
                    <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-secondary/50 transition-all duration-300">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/M1btmBDhSB8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Sección derecha - Contenido */}
                <div className="flex flex-col justify-center order-1 md:order-2 md:pl-10 relative">
                    <h1 className="mb-5 text-3xl leading-tight text-center font-bold md:text-left md:text-5xl md:mb-8 relative z-10">
                        <span className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            SANDBOX
                        </span>, <br />
                        <TypeAnimation
                            sequence={[
                                'Regulatorio',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-medium text-secondary"
                            style={{ fontWeight: 500 }}
                        />
                    </h1>

                    {/* GIF animado saludando que sale de la pantalla */}
                    <div className="fixed right-0 bottom-10 md:bottom-20 w-48 h-48 md:w-64 md:h-64 z-20 hover:scale-105 transition-transform duration-300 transform -translate-x-4">
    <img 
        src="/tumblr_162b73ed7fa893e3987e6b31ad43576e_5ff9ff9e_500.gif" 
        alt="Personaje animado saludando"
        className="w-full h-full object-contain"
    />
</div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start md:gap-6 relative z-10">
                        <a
                            href="/projects"
                            className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-darkBg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 flex items-center gap-2"
                        >
                            <span>Ver proyectos</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 font-medium rounded-full transition-all duration-300"
                        >
                            Contacto profesional
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;