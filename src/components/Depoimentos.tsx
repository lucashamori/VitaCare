'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tutor1 from '../../public/tutor1.png' 
import Image from 'next/image'

const slides = [
  {
    title: 'Pedro Almeida',
    description:
      'A clínica é maravilhosa! Sempre que preciso, sou atendida com rapidez e eficiência. Os profissionais são muito capacitados e sempre demonstram preocupação com o paciente.',
    image: tutor1,  
  },
  {
    title: 'João Lima',
    description:
      'Atendimento humanizado e ágil. Os médicos são muito atenciosos e explicam tudo com clareza. Sinto confiança em cada consulta e sei que estou em boas mãos',
    image: tutor1,
  },
  {
    title: 'Carlos Mendes',
    description:
      'Eu sempre tive receio de ir ao médico, mas na clínica me senti acolhido desde o primeiro momento. Os profissionais são extremamente competentes e o ambiente é muito acolhedor. Não troco essa clínica por nenhuma outra!',
    image: tutor1,
  },
  {
    title: 'Mariana Oliveira',
    description:
      'Fui muito bem atendida, desde a recepção até o momento da consulta. A estrutura é moderna e os profissionais são muito qualificados. Me senti segura e bem cuidada durante todo o processo. Super indico!',
    image: tutor1,
  },
];

export default function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    duration: 20,
    align: 'center', // Ajuste para centralizar o conteúdo
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="depoimentos" className="bg-white py-16 w-full justify-items-center">
      <div className="container mx-auto px-4 text-center justify-items-center">
        <h2 className="text-4xl font-bold text-black  justify-items-centermb-12">DEPOIMENTOS</h2>

        <div className="relative max-w-5xl mx-auto justify-items-center">
          <div ref={emblaRef} className="overflow-hidden justify-items-center">
            <div className="flex gap-8">
              {slides.map((slide, index) => (
                <div key={index} className="flex-none w-full pl-4 first:pl-0">
                  <article className="bg-gradient-to-r from-zinc-200 to-zinc-600 text-black rounded-2xl p-8 transition duration-300 h-full">
                    <div className='flex flex-col items-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={slide.image}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        {slide.title}
                      </h3>
                      <p className="text-black text-lg">
                        {slide.description}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-zinc-100 p-2 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:scale-110 ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>

          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-zinc-100 p-2 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:scale-110 ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Próximo slide"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

