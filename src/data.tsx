import { BookText, CodeSquare, HomeIcon, UserRound, Crop, Pencil, Computer, Book, Rocket, Speech, BookOpenCheck } from "lucide-react";



export const socialNetworksimg = [
  {
    id: 1,
    src: "https://www.facebook.com/sudeaseg.sudeaseg.5?mibextid=ZbWKwL",
    imgSrc: "/logo_facebook.png",
    name: "Facebook",
  },
  {
    id: 2,
    src: "https://www.youtube.com/@superintendenciadelaactivi4892",
    imgSrc: "/logo_youtube.png",
    name: "Youtube",
  },
  {
    id: 3,
    src: "https://www.instagram.com/sudeasegoficial/",
    imgSrc: "/logo_instagram.png",
    name: "Instagram",
  },
  {
    id: 4,
    src: "https://www.tiktok.com/@sudeaseg.oficial?_t=ZM-8sM5UVmCqMY&_r=1",
    imgSrc: "/logo_tiktok.png",
    name: "Tiktok",
  },
  // more items...
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
        
    },
    {
        id: 2,
        title: "Quiénes somos",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/quienes-somos",
    },
    {
        id: 3,
        title: "Preguntas Frecuentes",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/preguntas-frecuentes",
    },
    {
        id: 4,
        title: "Fases",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/fases",
    },
    {
        id: 5,
        title: "Requisitos",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/requisitos",
    },
    {
        id: 6,
        title: "Recaudos",
        icon: <BookOpenCheck size={25} color="#fff" strokeWidth={1} />,
        link: "/recaudos",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "¿Cuál es la tasa por servicio que debe pagarse para ingresar?",
        subtitle: "--------",
        description: "La presentación de proyectos en el SandBox Regulatorio no genera ningún pago de tasa administrativa por servicio.",
        date: "1",
    },
    {
        id: 2,
        title: "¿Quién puede solicitar el ingreso al SandBox Regulatorio?",
        subtitle: "--------",
        description: "Cualquier persona natural o jurídica que, de forma individual o conjunta con otras, busque aplicar tecnología en la actividad aseguradora a través de proyectos que tengan potencial utilidad o valor agregado en el mercado asegurador.",
        date: "2",
    },
    {
        id: 3,
        title: "¿A partir de qué momento puedo enviar mi proyecto?",
        subtitle: "--------",
        description: "La Superintendencia de la Actividad Aseguradora emitirá un aviso público donde notificará cual es el lapso para que los participantes presenten sus solicitudes de acceso al Ambiente de Prueba Sudeaseg. <br> <br> Las solicitudes de acceso se presentarán a través de la página web de esta Superintendencia de la Actividad Aseguradora, <a class='text-[#ffff] hover:text-[#2098cc]' href='http://www.sudeaseg.gob.ve'>www.sudeaseg.gob.ve</a>, en la sección <span class='font-bold text-[#ffff]'> SandBox Regulatorio.</span>",
        date: "3",
    },
    {
        id: 4,
        title: "Si un proyecto no es admitido ¿qué tiempo hay que esperar para introducir una nueva solicitud?",
        subtitle: "--------",
        description: "El participante podrá introducir una nueva solicitud después de haber transcurrido dos (2) meses, contados a partir de la fecha del pronunciamiento de esta Superintendencia. Esto con la finalidad de que cada aspirante realice la debida diligencia en relación a lo solicitado y mejore su propuesta de valor o presente una nueva solicitud completa.",
        date: "4",
    },
    {
        id: 5,
        title: "¿Qué sucede después de terminada la fase de prueba?",
        subtitle: "--------",
        description: "La Superintendencia de la Actividad Aseguradora se pronunciará mediante Acto Administrativo motivado, si el proyecto fue aprobado o desestimado.",
        date: "5",
    },
    {
        id: 6,
        title: "¿Cuáles son las fases del ambiente de pruebas?",
        subtitle: "--------",
        description: "<a class='text-[#ffff] hover:text-[#2098cc]' href='/fases'>Ir a la pagina de Fases</a>",
        date: "6",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];