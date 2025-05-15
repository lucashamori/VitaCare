
"use client"

import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react'



export default function Footer(){
  return (
    <section id='contato' className="bg-[#E84c3d] py-16 bg-black text-white">
      <div className='container mx-auto px-4'>

        

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Vita Care</h3>
            <p className='mb-4'>Cuidando da sua saúde com amor e dedicação.</p>
            
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (XX) 1231831238</p>
            <p>Rua X, centro, Poços de Caldas | MG</p>
          </div>


          

        </footer>

      </div>
    </section>
  );
}