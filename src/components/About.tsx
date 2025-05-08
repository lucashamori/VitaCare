import Image from "next/image";
import aboutImg from '../../public/image1.jpg'

import { Dot, Check } from "lucide-react";


export default function About() {
    return (
        <section className="bg-gray-200 py-16 " id="about">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                
                    <div className=" relative w-full mx-auto h-[400px] rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src={aboutImg}
                            alt="Sobre a clínica"
                            className="object-cover w-full h-full rounded-5xl hover:scale-110  duration-300"
                            quality={100}
                            priority={true}
                            

                        />
                        
                    </div>
                 
                 
                 <div className="space-y-6 text-black">
                    <h2 className="text-4xl font-bold text-black">SOBRE</h2>
                    <p>
                        Na VitaCare, acreditamos que a saúde é o bem mais precioso que alguém pode ter. Por isso, oferecemos um atendimento humanizado, acolhedor e centrado nas necessidades individuais de cada paciente.
                        Nossa clínica foi fundada com o propósito de unir tecnologia, ciência e empatia em um único espaço de cuidado integral à saúde.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className=" text-red-600" />
                            Aberto desde 1994.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className=" text-red-600" />
                            Mais de 20 mil pacientes atendidos.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className=" text-red-600" />
                            Equipe multidisciplinar com mais de 10 profissionais.
                        </li>
                    </ul>


                 </div>


                </div>
                 

            </div>
        </section>
    );
}