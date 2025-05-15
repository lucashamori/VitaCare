
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react'
const Equipe = () => {
    return (
      <section className="bg-[#E84c3d] py-16 text-white">
      <div className='container mx-auto px-4'>

        

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Vita Care</h3>
            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
            <a
              href="#"
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contato via WhatsApp
            </a>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: (XX) 1231831238</p>
            <p>Rua X, centro, Campo Grande | MS</p>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
              >
                <FacebookLogo className='w-8 h-8' />
              </a>
              <a
                href="#"
                target='_blank'
              >
                <InstagramLogo className='w-8 h-8' />
              </a>
              <a
                href="#"
                target='_blank'
              >
                <YoutubeLogo className='w-8 h-8' />
              </a>
            </div>
          </div>

        </footer>

      </div>
    </section>
    );
  };
  
 export default Equipe; 
  