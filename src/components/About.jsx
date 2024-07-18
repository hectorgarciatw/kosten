export default function About() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src="../../public/assets/images/headerImg.jpg" />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Guillermo M. García</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bienvenidos a Kosten</h1>
                            <p className="mb-8 leading-relaxed">
                                Somos Kosten, una empresa familiar con más de 30 años de experiencia dedicada a la innovación en construcción en la Patagonia. Nos especializamos en la creación de unidades habitacionales utilizando tecnologías
                                avanzadas como contenedores y el sistema constructivo Steel Frame.
                            </p>
                            <p>
                                Ofrecemos soluciones habitacionales modernas y sostenibles que cumplen con los más altos estándares de calidad y eficiencia. Nuestro compromiso con la excelencia se refleja en cada proyecto que llevamos a cabo,
                                asegurando espacios seguros, confortables y adaptados a las necesidades de nuestros clientes.
                            </p>
                            <br className="hidden lg:inline-block" />
                            <p>Explora cómo Kosten puede transformar tu visión de vivienda en realidad. ¡Contáctanos hoy para comenzar tu próximo proyecto!</p>
                            <br className="hidden lg:inline-block" />
                            <a className="text-indigo-500 inline-flex items-center">
                                Ver más
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
