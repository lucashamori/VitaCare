'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const slides = [
  {
    title: 'Clínica Geral',
    description:
      'Atendimento médico completo para avaliação de sintomas, exames de rotina e orientações preventivas.'
  },
  {
    title: 'Consultas Médicas Especializadas',
    description:
      'Profissionais em ginecologia, pediatria, cardiologia e mais. Atendimento humanizado e eficiente.',
  },
  {
    title: 'Vacinação e Imunização',
    description:
      'Aplicação de vacinas com equipe treinada. Ambiente seguro para você e sua família.',
  },
  {
    title: 'Exames Laboratoriais',
    description:
      'Realize seus exames com rapidez, segurança e comodidade em nossa clínica.',
  },
  {
    title: 'Exames de Imagem',
    description:
      'Contamos com equipamentos modernos para garantir diagnósticos precisos e rápidos.',
  },
  {
    title: 'Atendimento Domiciliar',
    description:
      'Serviço de saúde no conforto do seu lar. Ideal para pacientes com dificuldade de locomoção.',
  },
  {
    title: 'Acompanhamento Nutricional',
    description:
      'Nutricionistas capacitados para ajudar na sua alimentação e saúde.',
  },
  {
    title: 'Saúde Mental',
    description:
      'Psicólogos e psiquiatras prontos para cuidar da sua saúde mental com empatia e profissionalismo.',
  },
];

export default function Servicos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    duration: 20,
    align: 'start', // Adicionado para melhor controle do alinhamento
  },);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    setSelectedIndex(emblaApi.selectedScrollSnap());
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
    <section id="servicos" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-zinc-100 mb-12 text-center">
          Nossos Serviços
        </h2>

        {/* Card principal com navegação */}
        <div className="relative max-w-4xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-8"> {/* Adicionado gap-8 para espaçamento entre cards */}
              {slides.map((slide, index) => (
                <div key={index} className="flex-none w-full pl-4 first:pl-0"> {/* Adicionado padding left e exceção para o primeiro */}
                  <article className="bg-gradient-to-r from-zinc-200 to-zinc-600 text-zinc-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 h-full">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-zinc-100 text-lg">
                      {slide.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
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
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12  text-zinc-100 p-2 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:scale-110 ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Próximo slide"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}