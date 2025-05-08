import Image from "next/image";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Equipe from "@/components/Equipe";
import About from "@/components/About";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div >
    <Hero heading="Compromisso com a vida, respeito com você." 
          message="Mais do que oferecer cuidados de saúde, prezamos por um atendimento humano, ético e acolhedor, colocando você sempre em primeiro lugar."
    />
    <About/>
    
    <Servicos/>
    <Equipe/>
    </div>
  );
}
