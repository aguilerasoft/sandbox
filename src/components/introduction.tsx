import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="flex justify-center mt-[30%] mb-5 md:mt-0"> 
                <Image src="/Elemento-Banner.png" priority width="600" height="600" alt="Avatar" />
                </div>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center font-bold md:text-left md:text-xl md:mb-10">SANDBOX, <br />
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
                            className="font-bold text-secondary"
                        />
                    </h1>


                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-full hover:shadow-xl hover:shadow-white/50">
                            Youtube
                        </a>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;