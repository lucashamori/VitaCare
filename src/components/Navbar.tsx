"use client"

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        const offset = 80; // altura da navbar
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
          setNav(false);
        }
      };
      

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 300) {
                setColor("white");
                setTextColor("black");
            } else {
                setColor("transparent");
                setTextColor("white");
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", changeColor);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
        >
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-zinc-100">
                <h1
                    style={{ color: `${textColor}` }}
                    className="text-4xl font-black font-sans-serif"
                >
                    VITACARE
                </h1>

                <ul
                    style={{ color: `${textColor}` }}
                    className="hidden sm:flex items-center font-normal space-x-4"
                >
                    <li className="p-4 py-2 hover:text-blue-500">
                        <a className="cursor-pointer" onClick={() => scrollToSection("home")}>Início </a>
                    </li>
                    <li className="p-4 py-2 hover:text-blue-700">
                        <a className="cursor-pointer" onClick={() => scrollToSection("about")}>Sobre</a>
                    </li>
                    <li className="p-4 py-2 hover:text-blue-500">
                        <a className="cursor-pointer" onClick={() => scrollToSection("servicos")}>Serviços</a>
                    </li>
                    
                    <li className="p-4 py-2 hover:text-blue-500">
                        <a className="cursor-pointer" onClick={() => scrollToSection("depoimentos")}>Depoimentos</a>
                    </li>
                    <li className="p-4 py-2 hover:text-blue-500">
                        <a className="cursor-pointer" onClick={() => scrollToSection("contato")}>Contato</a>
                    </li>
                </ul>

                {/* Mobile button */}
                <div
                    className="block sm:hidden z-50 top-4 right-4"
                    onClick={handleNav}
                >
                    {nav ? (
                        <AiOutlineClose
                            size={20}
                            style={{ color: `${textColor}` }}
                        />
                    ) : (
                        <AiOutlineMenu
                            size={20}
                            style={{ color: `${textColor}` }}
                        />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-black text-zinc-100 text-center flex justify-center items-center transform transition-transform duration-300 z-40 ${
                        nav ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <ul>
                        <li className="p-4 py-4 text-xl hover:text-gray-500">
                            <a className="cursor-pointer" onClick={() => scrollToSection("home")}>Pagina Inicial</a>
                        </li>
                        <li className="p-4 py-4 text-xl hover:text-gray-500">
                            <a className="cursor-pointer" onClick={() => scrollToSection("about")}>Sobre</a>
                        </li>
                        <li className="p-4 py-4 text-xl hover:text-gray-500">
                            <a className="cursor-pointer" onClick={() => scrollToSection("servicos")}>Servicos</a>
                        </li>
                        <li className="p-4 py-4 text-xl hover:text-gray-500">
                            <a className="cursor-pointer" onClick={() => scrollToSection("equipe")}>Equipe</a>
                        </li>
                        <li className="p-4 py-4 text-xl hover:text-gray-500">
                            <a href="#home">Depoimentos</a>
                        </li>
                        <li className="p-4 py-4 text-xl hover:text-gray-500">
                            <a href="#home">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;