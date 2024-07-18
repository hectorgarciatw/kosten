import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <a className="text-3xl font-bold font-heading">Kolsten</a>
                <div className="hidden md:flex space-x-6">
                    <a className="hover:text-gray-200" href="#inicio">
                        Inicio
                    </a>
                    <a className="hover:text-gray-200" href="#acerca">
                        Acerca
                    </a>
                    <a className="hover:text-gray-200" href="#trabajos">
                        Trabajos
                    </a>
                    <a className="hover:text-gray-200" href="#contacto">
                        Contacto
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/kosten_construcciones/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                        <i className="bx bxl-instagram text-2xl bx-tada-hover"></i>
                    </a>
                    <a href="mailto:kostenconstrucciones@gmail.com" className="hover:text-gray-200">
                        <i className="bx bxl-gmail text-2xl bx-tada-hover"></i>
                    </a>
                    <a href="https://wa.me/54924791102" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                        <i className="bx bxl-whatsapp text-2xl bx-tada-hover"></i>
                    </a>
                    <a href="https://www.facebook.com/people/Kosten-Construcciones/61562339275563/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                        <i className="bx bxl-facebook text-2xl bx-tada-hover"></i>
                    </a>
                </div>
                <button onClick={toggleMenu} className="md:hidden flex items-center">
                    <i className="bx bx-menu text-3xl"></i>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <a className="block px-4 py-2 hover:text-gray-200" href="#inicio">
                        Inicio
                    </a>
                    <a className="block px-4 py-2 hover:text-gray-200" href="#acerca">
                        Acerca
                    </a>
                    <a className="block px-4 py-2 hover:text-gray-200" href="#trabajos">
                        Trabajos
                    </a>
                    <a className="block px-4 py-2 hover:text-gray-200" href="#contacto">
                        Contacto
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
