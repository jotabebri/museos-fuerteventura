var config = {
    style: 'mapbox://styles/jotabebri/cmm0iw7zy000j01qsanok2s9q',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoiam90YWJlYnJpIiwiYSI6ImNtbTBpcDNqYjAwbmIyc3NlNmhzMTJkYjYifQ.cbxLdUKJY7SdWZ4pf29N-A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Una isla, miles de historias',
    subtitle: 'La historia de Fuerteventura contada a través de sus museos y centros de interés cultural. Conoce las raíces de la tierra majorera desde su formación volcánica, las tradiciones, el arte, la cultura y las costumbres del pueblo que habita la isla desde los aborígenes hasta la actualidad, en este viaje del presente al pasado para que la memoria perdure en el futuro.',
    byline: 'Por José Benito Brito Guedes',
    footer: 'Contenidos recuperados de Museos de Fuerteventura, Cabildo de Fuerteventura. <br> Creado usando la plantilla de <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Centro de Interpretación de Batallas de El Cuchillete y Tamasite',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2023/02/DSC09976-2048x1567.jpg',
            description: 'La Casa de Las Simonas es el centro de interpretación para conocer y comprender dos importantes acontecimientos históricos que tuvieron lugar en Fuerteventura en 1740: Las Batallas de El Cuchillete y Tamasite, cuando los corsarios ingleses asaltaron al pueblo de Tuineje, y fueron derrotados con orgullo por las milicias de la isla y los vecinos de los pueblos de la zona, la primera vez, desprevenidos, armados con piedras y palos.<br><a href="https://museosfuerteventura.com/museos/centro-de-interpretacion-batallas-de-el-cuchillete-y-tamasite/" target="_blank">Saber más</a>',            location: {
                center: [-14.039357241107032, 28.32815749766962],
                zoom: 11,
                pitch: 60,
                bearing: -20,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Centro de Interpretación Poblado de La Atalayita',
            image: 'https://culturafuerteventura.es/wp-content/uploads/elementor/thumbs/atalayita_2-qpxvthpc0516g6lg0828azghsw3kfaarrmy7ukw6fc.jpg',
            description: 'En medio del impresionante paisaje protegido del Malpaís Grande nos encontramos con esta joya del patrimonio cultural: el yacimiento arqueológico del Poblado de La Atalayita, Centro de Interpretación e Investigación llamado a convertirse en el primer Parque Arqueológico de Fuerteventura. <br><a href="https://museosfuerteventura.com/museos/centro-de-interpretacion-poblado-la-atalayita/" target="_blank">Saber más</a>',            location: {
                center: [-13.927579884440004, 28.3236198104919],
                zoom: 13,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Museo Arqueológico de Fuerteventura',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/11/arqueo-39.jpg',
            description: 'En la Villa Histórica de Betancuria, primera capital de las Islas Canarias después de la conquista y merecidamente distinguida como uno de los pueblos más bonitos de España, se encuentra el museo Arqueológico Insular. Un moderno espacio que nace con vocación para la promoción de la cultura y de la investigación, centro y núcleo de todos los conocimientos sobre los aborígenes majoreros, los mahos. <br><a href="https://museosfuerteventura.com/museos/museo-arqueologico-de-fuerteventura/" target="_blank">Saber más</a>',            location: {
                center: [-14.05574759111547, 28.424465784453393],
                zoom: 12.52,
                pitch: 8.01,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Complejo Cultural Patrimonio de la Ampuyenta',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/ampuyenta-4.jpg',
            description: 'Un viaje al pasado de Fuerteventura a través de un pequeño recorrido a pie por el pueblo de La Ampuyenta, su encantador entorno rural y sus edificios históricos. <br><a href="https://museosfuerteventura.com/museos/complejo-cultural-patrimonial-de-la-ampuyenta/" target="_blank">Saber más</a>',            location: {
                center: [-13.99398946043255, 28.463920909825646],
                zoom: 13,
                pitch: 10,
                bearing: -30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Ecomuseo La Alcogida',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/ecomuseo-4.jpg',
            description: 'La Alcogida es una representación de los valores etnográficos de Fuerteventura, un paseo a través de la historia por un poblado tradicional rural del siglo pasado compuesto por siete edificios de diferente tamaño y estructura, acorde con el nivel económico de las familias que los habitaron en su día. <br><a href="https://museosfuerteventura.com/museos/ecomuseo-de-la-alcogida/" target="_blank">Saber más</a>',            location: {
                center: [-13.996919188695582, 28.521992763743054],
                zoom: 14,
                pitch: 50,
                bearing: -60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seis-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Faro de La Entallada',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/entallada-4.jpg',
            description: 'En el punto de Fuerteventura y de Canarias más cercano a África, a escasos cien kilómetros de la costa del continente vecino, se edificó en 1954 el Faro de La Entallada. Situado en un acantilado a doscientos metros sobre el nivel del mar, las vistas que ofrece son sobrecogedoras: por un lado, el océano infinito, por otro, el Monumento Natural Cuchillos de Vigán, un espacio natural protegido con un inmenso valor, por sus altas montañas de coladas volcánicas que son el hogar de algunas de las especies más emblemáticas de Canarias, como el majestuoso guirre. <br><a href="https://museosfuerteventura.com/museos/faro-de-la-entallada/" target="_blank">Saber más</a>',
            location: {
                center: [-13.948086706463261, 28.230488487309064],
                zoom: 15,
                pitch: 50,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'siete-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Museo de Las Salinas del Carmen',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/sal-4.jpg',
            description: 'Las Salinas del Carmen y su Museo de la Sal constituyen uno de los testigos vivos más especiales de la historia de Fuerteventura. Su nacimiento se remonta al siglo XVIII, y hoy en día se mantiene vivo gracias a sus salineros, a la vista de los visitantes, que siguen produciendo una de las sales más ricas del mundo con el método tradicional, dando como resultado una sal de espuma muy preciada en el sector gastronómico. <br><a href="https://museosfuerteventura.com/museos/museo-de-la-sal/" target="_blank">Saber más</a>',            location: {
                center: [-13.869653969667672, 28.36768270214611],
                zoom: 12,
                pitch: 30,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ocho-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Museo del Grano La Cilla',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/grano-4.jpg',
            description: '“Cillas” son los edificios donde se almacenaba la parte de las cosechas que cada agricultor pagaba al obispado en concepto de renta, conocido como diezmo en referencia a la décima parte del total cosechado. Estas estancias, construidas al estilo tradicional majorero, estaban acondicionadas para almacenar los productos de la tierra, sobre todo el grano, en las mejores condiciones posibles de conservación. <br><a href="https://museosfuerteventura.com/museos/museo-del-grano-la-cilla/" target="_blank">Saber más</a>',            location: {
                center: [-13.929518431021936, 28.612143186104227],
                zoom: 13,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nueve-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Museo del Queso Majorero',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/queso-1.jpg',
            description: 'En el pueblo de Antigua se encuentra el Museo del Queso Majorero, la joya y el orgullo gastronómico de Fuerteventura, con Denominación de Origen desde 1996 y el primer queso de cabra de España en obtenerla. El espacio museístico del aclamado queso ofrece un paseo a través de la historia de Fuerteventura desde su formación volcánica, pasando por los aborígenes, la actividad ganadera, la cabra majorera, la tradición y el queso. <br><a href="https://museosfuerteventura.com/museos/museo-del-queso-majorero/" target="_blank">Saber más</a>',            location: {
                center: [-14.01245527500272, 28.431248428515254],
                zoom: 14,
                pitch: 40,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'diez-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Centro de Interpretación de Los Molinos',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/11/Tiscamanita-4.jpg',
            description: 'El Centro de Interpretación de los Molinos en Tiscamanita te cuenta su historia: el cultivo del cereal en la tierra de Fuerteventura desde tiempos prehistóricos, las distintas maneras para molerlo y obtener harina a lo largo de los años, las diferencias entre el molino y la molina y el proceso de fabricación del gofio, uno de los productos más representativos de la gastronomía canaria, salvación para la población de las islas en épocas de hambruna, y un ingrediente muy presente en la cocina tradicional, pero también en la cocina más moderna. <br><a href="https://museosfuerteventura.com/museos/tiscamanita-los-molinos/" target="_blank">Saber más</a>',            location: {
                center: [-14.035271246372078, 28.35320553674185],
                zoom: 15,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'once-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Casa Museo Unamuno',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/08/unamuno-5.jpg',
            description: 'La Casa Museo Unamuno es la vivienda que acogió al insigne escritor español Miguel de Unamuno cuando, en 1924, llegó a tierras majoreras desterrado por la dictadura de Rivera. Pronto, el escritor convirtió la condena en una aventura enriquecedora y fascinante, hizo grandes amistades en la isla, la recorrió de punta a punta interesándose por su historia, sus gentes y admirando su belleza. Y escribió sonetos sobre ello, dándole a Fuerteventura, la remota y desconocida Fuerteventura, un reconocimiento en el exterior. <br><a href="https://museosfuerteventura.com/museos/casa-museo-unamuno/" target="_blank">Saber más</a>',            location: {
                center: [-13.86073546597028, 28.498942651486853],
                zoom: 16,
                pitch: 60,
                bearing: -100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'doce-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Centro de Interpretación del Parque Natural de Jandía',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/parque-jandia-4.jpg',
            description: 'En el extremo sur de Fuerteventura, en la zona más indómita y salvaje de la isla, aguarda el faro de la Punta de Jandía, uno de los más antiguos de Canarias, inaugurado en 1864, hoy centro de interpretación del valioso Parque Natural de Jandía. Este parque natural, el mayor de Fuerteventura, se extiende desde la punta hasta el istmo de La Pared, que separa la península de Jandía del resto de la isla. <br><a href="https://museosfuerteventura.com/museos/centro-de-interpretacion-parque-natural-de-jandia/" target="_blank">Saber más</a>',            location: {
                center: [-14.506625372285725, 28.065998564427428],
                zoom: 14,
                pitch: 20,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'trece-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Centro de Interpretación Cueva del Llano',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/cueva-2.jpg',
            description: 'La Cueva del Llano, un tubo de lava de un millón de años de edad y una longitud de 650 metros, parece ser que se formó a raíz de la erupción del volcán de la famosa montaña de Escanfraga, el cono volcánico más alto de Fuerteventura. Pero su elevado valor geológico no es lo único que la cueva tiene que ofrecer, es, además, un yacimiento paleontológico con una gran cantidad de restos óseos fosilizados, y también el hogar de una fauna muy especial, como la araña ciega maiorerus randoi, única en el mundo. Estas y otras maravillas aguardan en la Cueva del Llano y su centro de interpretación. <br><a href="https://museosfuerteventura.com/museos/cueva-del-llano/" target="_blank">Saber más</a>',            location: {
                center: [-13.901969402755263, 28.653266230036962],
                zoom: 12,
                pitch: 10,
                bearing: -30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'catorce-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Mirador de Morro Velosa',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/mirador-3.jpg',
            description: 'Betancuria, en el centro de una isla Reserva de la Biosfera en su totalidad, destaca especialmente por sus encantos naturales, protegidos dentro del Parque Rural de Betancuria: barrancos, malpaíses, palmeras, montañas, biodiversidad vegetal y animal, etc. Para admirar este espectáculo de la naturaleza como se merece, se diseñó el Mirador de Morro Velosa, levantado sobre el pico del mismo nombre a casi 700 metros de altura sobre el nivel del mar, ofreciendo unas vistas sobrecoge-doras. <br><a href="https://museosfuerteventura.com/museos/mirador-de-morro-velosa/" target="_blank">Saber más</a>',              location: {
                center: [-14.050099325204148, 28.438946844322633],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'quince-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Museo de la Pesca Tradicional',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/pesca-4.jpg',
            description: 'Este faro rojiblanco, con sus tres torres construidas en distintas épocas para guiar a los marineros que navegan por las aguas del norte de Fuerteventura y el estrecho que la separa de la vecina isla de Lanzarote, es emblema del mar y de su mundo. El entorno natural donde se encuentra cautiva a todos sus espectadores, que lo han admirado y retratado hasta convertirlo en un símbolo de Fuerteventura y su carácter marinero. <br><a href="https://museosfuerteventura.com/museos/museo-de-la-pesca-tradicional/" target="_blank">Saber más</a>',            location: {
                center: [-14.00674537024522, 28.717814413499593],
                zoom: 11,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dieciseis-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Casa Alta de Tindaya',
            image: 'https://museosfuerteventura.com/wp-content/uploads/2022/09/tindaya-3.jpg',
            description: 'La Casa Alta es un ejemplo de construcción tradicional majorera de la burguesía de Fuerteventura, que alberga en su interior zonas expositivas y de interpretación sobre los valores de la montaña y de la zona, que son muchos: valores arqueológicos, por los centenares de grabados aborígenes que se amontonan en su cima; históricos, por sus memorias y leyendas; geológicos, por su formación y composición; y naturales, pues es el hogar de especies endémicas y singulares. Una montaña de inmenso valor, tan inmenso como ella. <br><a href="https://museosfuerteventura.com/museos/casa-alta-de-tindaya/" target="_blank">Saber más</a>',            location: {
                center: [-13.977608692956224, 28.578151257774692],
                zoom: 15,
                pitch: 50,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dieciocho-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Una isla repleta de historias',
            description: 'Descubre Fuerteventura a través de sus museos. <br><a href="https://museosfuerteventura.com/" target="_blank">Conoce la Red de museos</a>',            location: {
                center: [-13.977608692956224, 28.578151257774692],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
