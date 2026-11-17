// REVISA ESTO: son entradas de ejemplo, verosímiles para un alumno de SMR.
// Quita o cambia lo que no hayas hecho de verdad: en una entrevista te
// preguntarán por cualquiera de estas cosas.

export type Experience = {
  title: string;
  year: string;
  where: "Casa" | "Instituto" | "Personal";
  description: string;
  details: string[];
  tags: string[];
  url?: string;
};

// Más reciente primero.
export const experience: Experience[] = [
  {
    title: "Dominio Windows Server en máquinas virtuales",
    year: "2026",
    where: "Instituto",
    description:
      "Montaje de un pequeño dominio de empresa simulado en VirtualBox para el módulo de sistemas operativos en red.",
    details: [
      "Instalación de Windows Server 2022 y promoción a controlador de dominio con Active Directory.",
      "Alta de usuarios, grupos y unidades organizativas; equipos cliente Windows 11 unidos al dominio.",
      "Carpetas compartidas con permisos NTFS por grupo y políticas de grupo (GPO) básicas: fondo de pantalla y bloqueo del panel de control.",
    ],
    tags: ["Windows Server", "Active Directory", "GPO", "VirtualBox"],
  },
  {
    title: "Diseño de redes en Packet Tracer",
    year: "2026",
    where: "Instituto",
    description:
      "Prácticas de redes locales simuladas: de una red plana a una red segmentada con varios departamentos.",
    details: [
      "Cálculo de subredes y direccionamiento IPv4 para cada departamento.",
      "Configuración de switches con VLANs y de un router con DHCP y rutas estáticas.",
      "Comprobación de conectividad con ping y tracert y resolución de fallos de configuración.",
    ],
    tags: ["Cisco Packet Tracer", "VLAN", "Subnetting", "DHCP"],
  },
  {
    title: "Cableado y puesta a punto del aula",
    year: "2025",
    where: "Instituto",
    description:
      "Trabajo práctico en el aula de SMR: cableado estructurado y preparación de equipos para el curso.",
    details: [
      "Crimpado de latiguillos RJ45 según la norma T568B y verificación con comprobador de cables.",
      "Instalación de Ubuntu en los equipos del aula y clonado de la imagen a varios puestos con Clonezilla.",
      "Diagnóstico de equipos que no arrancaban: RAM mal asentada, disco con sectores dañados y fuente defectuosa.",
    ],
    tags: ["RJ45", "Ubuntu", "Clonezilla", "Diagnóstico"],
  },
  {
    title: "Dual boot Windows 11 + Ubuntu",
    year: "2025",
    where: "Casa",
    description:
      "Instalación de Ubuntu junto a Windows 11 en mi PC para usar los dos sistemas sin perder datos.",
    details: [
      "Reducción de la partición de Windows desde el administrador de discos y creación del USB de instalación con Rufus.",
      "Ajustes de UEFI (orden de arranque y Secure Boot) y configuración de GRUB como gestor de arranque.",
      "Solución del desfase de hora entre sistemas configurando el reloj de Linux en hora local.",
    ],
    tags: ["Ubuntu", "Windows 11", "GRUB", "UEFI"],
  },
  {
    title: "Red doméstica",
    year: "2025",
    where: "Casa",
    description: "Revisión y mejora de la red de casa: más segura y con mejor cobertura.",
    details: [
      "Cambio de la contraseña de administración del router, cifrado WPA2/WPA3 y nuevo nombre de red.",
      "Reserva de IPs por DHCP para el PC y la impresora y análisis de canales Wi-Fi para evitar interferencias.",
      "Tirada de cable de red hasta mi habitación con latiguillos crimpados por mí.",
    ],
    tags: ["Router", "Wi-Fi", "DHCP", "Cableado"],
  },
  {
    title: "Montaje de mi PC",
    year: "2024",
    where: "Casa",
    description:
      "Elección de componentes, montaje completo y puesta en marcha de mi ordenador de sobremesa.",
    details: [
      "Selección de piezas comprobando compatibilidad de socket, RAM y potencia de la fuente.",
      "Montaje, gestión de cables, actualización de BIOS y activación del perfil XMP de la memoria.",
      "Instalación limpia de Windows, drivers y pruebas de estabilidad y temperaturas con HWiNFO y MemTest86.",
    ],
    tags: ["Hardware", "BIOS", "Windows", "HWiNFO"],
  },
  {
    title: "Webs desplegadas",
    year: "2026",
    where: "Personal",
    description:
      "Además de sistemas y redes, desarrollo y despliego webs propias: una tienda online y una red social de anime y manga.",
    details: [
      "Mixy Blink: tienda online con catálogo, carrito y pagos.",
      "Tanzaku: red social para registrar anime y manga.",
    ],
    tags: ["Next.js", "Git", "Vercel"],
    url: "https://tanzaku.vercel.app",
  },
];
