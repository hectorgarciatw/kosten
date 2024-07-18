import React from 'react';
import 'boxicons/css/boxicons.min.css';

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="../../public/assets/images/logo.jpg" alt="Logo" className="w-50 h-50 p-2" />
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2024 Sitio desarrollado por
                    <a href="https://github.com/hectorgarciatw/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                        ☕️ Héctor García
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://www.facebook.com/people/Kosten-Construcciones/61562339275563/" className="text-gray-500">
                        <i className="bx bxl-facebook bx-sm bx-tada-hover"></i>
                    </a>
                    <a href="https://www.instagram.com/kosten_construcciones/" className="ml-3 text-gray-500">
                        <i className="bx bxl-instagram bx-sm bx-tada-hover"></i>
                    </a>
                    <a href="https://wa.me/1234567890" className="ml-3 text-gray-500">
                        <i className="bx bxl-whatsapp bx-sm bx-tada-hover"></i>
                    </a>
                    <a href="mailto:your-email@example.com" className="ml-3 text-gray-500">
                        <i className="bx bxl-gmail bx-sm bx-tada-hover"></i>
                    </a>
                </span>
            </div>
        </footer>
    );
}
