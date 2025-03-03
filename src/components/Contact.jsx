import React from 'react';

export default function Contact() {
    return (
        <section id="contacto" className="text-gray-600 body-font relative">
            <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-6 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Rawson,+Chubut,+Argentina&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        style={{
                            height: '100%',
                            filter: 'none',
                            minHeight: '600px', // Reduce la altura mínima del iframe
                        }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-4 px-4 rounded shadow-md h-auto">
                        <div className="lg:w-1/2 px-4">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Ubicación</h2>
                            <p className="mt-1">Nos encontramos en Rawson, provincia de Chubut - Patagonia, Argentina</p>
                        </div>
                        <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:kostenconstrucciones@email.com" className="text-indigo-500 leading-relaxed">
                                kostenconstrucciones@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TELÉFONO</h2>
                            <p className="leading-relaxed">2944791102</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h1 className="text-gray-900 text-lg mb-1 font-medium title-font">Formulario de Contacto</h1>
                    <p className="leading-relaxed mb-5 text-gray-600">Complete los siguientes campos por favor</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Nombre y Apellido
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Consulta
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg inline-flex items-center justify-center">
                        <i className="bx bx-envelope mr-2"></i>
                        Enviar consulta
                    </button>
                    <p className="text-xs text-gray-500 mt-3">Una vez recibida su consulta nos estaremos comunicando con usted.</p>
                </div>
            </div>
        </section>
    );
}
