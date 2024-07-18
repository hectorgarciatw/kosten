export default function Gallery() {
    const items = [
        {
            id: 1,
            imgSrc: 'https://picsum.photos/722/402',
            subtitle: 'Puerto Madryn',
            title: 'Portón principal',
            description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        },
        {
            id: 2,
            imgSrc: 'https://picsum.photos/722/402',
            subtitle: 'Trelew',
            title: 'Construcción en seco',
            description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        },
        {
            id: 3,
            imgSrc: 'https://picsum.photos/722/402',
            subtitle: 'Playa Unión',
            title: 'Techo de estructura',
            description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
        },
    ];
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto max-w-screen-lg">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <div className="flex flex-col items-start">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Portfolio de trabajos realizados</h1>
                            <div className="h-1 bg-indigo-500 rounded w-full"></div>
                        </div>
                    </div>

                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac
                        humblebrag.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {items.map((item) => (
                        <div key={item.id} className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.imgSrc} alt={item.title} />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.subtitle}</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                                <p className="leading-relaxed text-base">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
