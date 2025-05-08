export default function Hero({heading, message}: {heading: string; message: string}) {
    
    return (
        <div
            id="home"
            className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/image5.jpg')" }}
        >   
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]"/>
            {/*Overlay*/}
            <div className="p-5 text-white z-[2] ml-[-10rem] mt-[-10rem] text-left justify-items-start">
                <h2 className="text-5xl font-bold max-w-xl">{heading}</h2>
                <p className="py-5 text-xl max-w-xl text-left">{message}</p>
                
            </div>
        </div>
    );
    }