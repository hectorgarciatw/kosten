import "boxicons"; // Importa Boxicons

export default function Navbar() {
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                {/* Enlaces de navegación */}
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500">
                        Acerca
                    </a>

                    <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500">
                        Trabajos
                    </a>

                    <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500">
                        Contacto
                    </a>
                </div>

                {/* Iconos de redes sociales */}
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-white hover:text-blue-500">
                        <i className="bx bxl-instagram bx-xs bx-tada-hover"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-500">
                        <i className="bx bx-envelope bx-xs bx-tada-hover"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-500">
                        <i className="bx bxl-whatsapp bx-xs bx-tada-hover"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-500">
                        <i className="bx bxl-facebook bx-xs bx-tada-hover"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}
