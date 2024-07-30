import React, { useState } from 'react';

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const items = [
        {
            id: 1,
            imgSrc: '/assets/images/trabajos/trabajo1.jpg',
            subtitle: 'Playa Unión - Chubut',
            title: 'Contenedor',
            description: 'Casa realizada con  3 contenedores de 12 metros (baño-cocina y living), frente con aberturas de aluminio.',
        },
        {
            id: 2,
            imgSrc: '/assets/images/trabajos/trabajo2.jpg',
            subtitle: 'Rawson - Chubut',
            title: 'Quincho',
            description: 'Quincho de 60 metros 2 con sistema constructivo Steel Frame, revestido en Siding con abertura de aluminio.',
        },
        {
            id: 3,
            imgSrc: '/assets/images/trabajos/trabajo7.jpg',
            subtitle: 'Puerto Madryn - Chubut',
            title: 'Monoambiente',
            description: 'Monoambiente: Listo para habitar (instalaciones de agua,electricidad y sanitarios).',
        },
        {
            id: 4,
            imgSrc: '/assets/images/trabajos/trabajo8.jpg',
            subtitle: 'Trelew - Chubut',
            title: 'Quincho',
            description: 'Interior de Quincho de 70 metros, con sistema constructivo en steel Frame y techo metalúrgico con cabreadas a la vista.',
        },
        {
            id: 5,
            imgSrc: '/assets/images/trabajos/trabajo5.jpg',
            subtitle: 'Trelew',
            title: 'Construcción en seco',
            description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        },
        {
            id: 6,
            imgSrc: '/assets/images/trabajos/trabajo6.jpg',
            subtitle: 'Playa Unión - Chubut',
            title: 'Interiores',
            description: 'Espacio Interior de contenedor de 12 metros, piso flotante de PVC y salamandra a leña.',
        },
    ];

    const openModal = (imgSrc) => {
        setCurrentImage(imgSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage('');
    };

    return (
        <section id="trabajos" className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto max-w-screen-lg">
                <div className="flex flex-col items-center w-full mb-20 text-center">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">Últimos trabajos realizados</h1>
                        <div className="h-1 bg-indigo-500 rounded w-full"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 mt-4">
                        En Kosten, combinamos más de 30 años de experiencia con innovadoras técnicas de construcción, como el uso de contenedores y el sistema Steel Frame. Explora cómo transformamos ideas en realidades habitacionales únicas y
                        avanzadas.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {items.map((item) => (
                        <div key={item.id} className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg cursor-pointer" onClick={() => openModal(item.imgSrc)}>
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.imgSrc} alt={item.title} />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.subtitle}</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                                <p className="leading-relaxed text-base">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <img className="max-w-full max-h-screen" src={currentImage} alt="Full Screen" />
                            <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-white text-3xl">
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
