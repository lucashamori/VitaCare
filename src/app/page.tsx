import Image from "next/image";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Depoimentos from "@/components/Depoimentos";
import Equipe from "@/components/Equipe";
import { Inter } from "next/font/google";
import { createContext, useContext } from 'react';

export default function Home() {
  return (
    <div >
    <Hero heading="Compromisso com a vida, respeito com você." 
          message="Mais do que oferecer cuidados de saúde, prezamos por um atendimento humano, ético e acolhedor, colocando você sempre em primeiro lugar."
    />
    <About/>
    <Servicos/>
    <Depoimentos/>
    <Footer/>
    
    
    </div>
  );
}
