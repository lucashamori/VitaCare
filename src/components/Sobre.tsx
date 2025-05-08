const Sobre = () => {
    return (
      <div
        id="sobre"
        className="w-full p-1 py-16 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="flex items-center justify-end h-screen">
          <div className="col-span-2 max-w-xl pl-10 text-left p-4">
            <p className="text-5xl font-bold max-w-xl uppercase text-black">
              Sobre a Clínica
            </p>
  
            <p className="py-2 text-xl pr-8 text-left text-black">
              Na VitaCare, acreditamos que a saúde é o bem mais precioso que alguém pode ter.
              Por isso, oferecemos um atendimento humanizado, acolhedor e centrado nas necessidades
              individuais de cada paciente.
            </p>
            <p className="py-2 text-xl pr-8 text-left text-black">
                Nossa clínica foi fundada com o propósito de unir
              tecnologia, ciência e empatia em um único espaço de cuidado integral à saúde.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sobre;
  