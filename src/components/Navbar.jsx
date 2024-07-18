import React from 'react';

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="../../public/assets/images/logo.jpg" alt="Logo" className="w-50 h-50 p-2 " />
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Acerca</a>
                    <a className="mr-5 hover:text-gray-900">Trabajos</a>
                    <a className="mr-5 hover:text-gray-900">Clientes</a>
                    <a className="mr-5 hover:text-gray-900">Contacto</a>
                </nav>
            </div>
        </header>
    );
}
