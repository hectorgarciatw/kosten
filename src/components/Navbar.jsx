import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
                <div className="flex flex-col items-center md:items-start">
                    <a className="text-3xl font-bold font-heading transform transition-transform duration-300 hover:scale-110">Kolsten</a>
                    <span className="text-sm mt-1 text-white">Viviendas que fusionan innovación y estilo</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a
                        className="relative hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-indigo-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#inicio"
                    >
                        Inicio
                    </a>
                    <a
                        className="relative hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-indigo-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#soluciones"
                    >
                        Soluciones
                    </a>
                    <a
                        className="relative hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-indigo-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#acerca"
                    >
                        Acerca
                    </a>
                    <a
                        className="relative hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-indigo-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#trabajos"
                    >
                        Trabajos
                    </a>
                    <a
                        className="relative hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-indigo-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#contacto"
                    >
                        Contacto
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/kosten_construcciones/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110">
                        <i className="bx bxl-instagram text-2xl"></i>
                    </a>
                    <a href="mailto:kostenconstrucciones@gmail.com" className="hover:text-red-500 transition-transform transform hover:scale-110">
                        <i className="bx bxl-gmail text-2xl"></i>
                    </a>

                    <a href="https://wa.me/542944791102" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-transform transform hover:scale-110">
                        <i className="bx bxl-whatsapp text-2xl"></i>
                    </a>
                    <a href="https://www.facebook.com/people/Kosten-Construcciones/61562339275563/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform transform hover:scale-110">
                        <i className="bx bxl-facebook text-2xl"></i>
                    </a>
                </div>
                <button onClick={toggleMenu} className="md:hidden flex items-center">
                    <i className="bx bx-menu text-3xl"></i>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <a
                        className="block px-4 py-2 hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-blue-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#inicio"
                    >
                        Inicio
                    </a>
                    <a
                        className="block px-4 py-2 hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-green-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#acerca"
                    >
                        Acerca
                    </a>
                    <a
                        className="block px-4 py-2 hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-red-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#trabajos"
                    >
                        Trabajos
                    </a>
                    <a
                        className="block px-4 py-2 hover:text-gray-300 transition-colors duration-300 
            after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-yellow-500 
            after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                        href="#contacto"
                    >
                        Contacto
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
