import React from 'react';

export default function Header() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Bienvenidos a Kosten
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Somos Kosten, una empresa familiar con más de 30 años de experiencia dedicada a la innovación en construcción en la Patagonia. Nos especializamos en la creación de unidades habitacionales utilizando tecnologías avanzadas
                            como contenedores y el sistema constructivo Steel Frame.
                        </p>
                        <p>
                            Ofrecemos soluciones habitacionales modernas y sostenibles que cumplen con los más altos estándares de calidad y eficiencia. Nuestro compromiso con la excelencia se refleja en cada proyecto que llevamos a cabo, asegurando
                            espacios seguros, confortables y adaptados a las necesidades de nuestros clientes.
                        </p>
                        <br className="hidden lg:inline-block" />
                        <p>Explora cómo Kosten puede transformar tu visión de vivienda en realidad. ¡Contáctanos hoy para comenzar tu próximo proyecto!</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded box-shadow-xl" alt="hero" src="/assets/images/headerImg.jpg" />
                    </div>
                </div>
            </section>
        </>
    );
}
