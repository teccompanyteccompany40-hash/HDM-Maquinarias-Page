export interface Maquina {
  id: number;
  nombre: string;
  marca: string;
  categoria: string;
  año: number;
  condicion: "Nuevo" | "Usado" | "Reacondicionado";
  potencia: string;
  peso: string;
  ubicacion: string;
  descripcion: string;
  especificaciones: { label: string; valor: string }[];
  imagen: string;
  destacado?: boolean;
}

export const categoriasMaquinaria = [
  "Excavadoras",
  "Cargadores Frontales",
  "Tractores / Orugas",
  "Motoniveladoras",
  "Retroexcavadoras",
  "Volquetes",
  "Grúas",
  "Compactadoras",
];

export const marcasMaquinaria = ["Caterpillar", "Komatsu", "Volvo", "Hitachi", "John Deere", "XCMG"];

export const maquinarias: Maquina[] = [
  {
    id: 1,
    nombre: "Excavadora Hidráulica 320D",
    marca: "Caterpillar",
    categoria: "Excavadoras",
    año: 2019,
    condicion: "Usado",
    potencia: "121 kW (162 HP)",
    peso: "20 300 kg",
    ubicacion: "Ate, Lima",
    descripcion:
      "Excavadora de cadenas ideal para obras civiles y minería de mediana escala. Motor eficiente en consumo de combustible y sistema hidráulico de alta precisión.",
    especificaciones: [
      { label: "Motor", valor: "Cat C6.6 ACERT" },
      { label: "Capacidad de cucharón", valor: "1.19 m³" },
      { label: "Profundidad de excavación", valor: "6.62 m" },
      { label: "Horas de uso", valor: "8 200 h" },
    ],
    imagen: "",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Cargador Frontal 950M",
    marca: "Caterpillar",
    categoria: "Cargadores Frontales",
    año: 2021,
    condicion: "Usado",
    potencia: "158 kW (212 HP)",
    peso: "18 100 kg",
    ubicacion: "La Victoria, Lima",
    descripcion:
      "Cargador frontal robusto, diseñado para movimiento de materiales a gran escala con máxima productividad y bajo costo operativo.",
    especificaciones: [
      { label: "Motor", valor: "Cat C7.1 ACERT" },
      { label: "Capacidad de cucharón", valor: "3.3 m³" },
      { label: "Carga de vuelco", valor: "12 500 kg" },
      { label: "Horas de uso", valor: "5 400 h" },
    ],
    imagen: "",
    destacado: true,
  },
  {
    id: 3,
    nombre: "Tractor de Orugas D6T",
    marca: "Caterpillar",
    categoria: "Tractores / Orugas",
    año: 2018,
    condicion: "Reacondicionado",
    potencia: "165 kW (215 HP)",
    peso: "19 600 kg",
    ubicacion: "Ate, Lima",
    descripcion:
      "Tractor de orugas reacondicionado en taller propio, ideal para movimiento de tierras, nivelación y desbroce en proyectos de infraestructura.",
    especificaciones: [
      { label: "Motor", valor: "Cat C9.3 ACERT" },
      { label: "Hoja topadora", valor: "Semi-U 3.75 m³" },
      { label: "Velocidad máx.", valor: "11 km/h" },
      { label: "Horas de uso", valor: "6 900 h" },
    ],
    imagen: "",
  },
  {
    id: 4,
    nombre: "Excavadora PC200-8",
    marca: "Komatsu",
    categoria: "Excavadoras",
    año: 2020,
    condicion: "Usado",
    potencia: "110 kW (148 HP)",
    peso: "20 700 kg",
    ubicacion: "Ate, Lima",
    descripcion:
      "Excavadora hidráulica versátil, con cabina ergonómica y sistema de control de combustible inteligente para reducir costos operativos.",
    especificaciones: [
      { label: "Motor", valor: "Komatsu SAA6D107E-1" },
      { label: "Capacidad de cucharón", valor: "0.8 - 1.0 m³" },
      { label: "Profundidad de excavación", valor: "6.62 m" },
      { label: "Horas de uso", valor: "7 100 h" },
    ],
    imagen: "",
    destacado: true,
  },
  {
    id: 5,
    nombre: "Motoniveladora 120K",
    marca: "Caterpillar",
    categoria: "Motoniveladoras",
    año: 2017,
    condicion: "Usado",
    potencia: "125 kW (168 HP)",
    peso: "14 700 kg",
    ubicacion: "La Victoria, Lima",
    descripcion:
      "Motoniveladora de alto rendimiento para trabajos de nivelación de vías y plataformas, con hoja de gran alcance y control de precisión.",
    especificaciones: [
      { label: "Motor", valor: "Cat C7.1 ACERT" },
      { label: "Longitud de hoja", valor: "3.66 m" },
      { label: "Ángulo de corte", valor: "90°" },
      { label: "Horas de uso", valor: "9 500 h" },
    ],
    imagen: "",
  },
  {
    id: 6,
    nombre: "Retroexcavadora 416F2",
    marca: "Caterpillar",
    categoria: "Retroexcavadoras",
    año: 2020,
    condicion: "Usado",
    potencia: "74 kW (99 HP)",
    peso: "8 200 kg",
    ubicacion: "Ate, Lima",
    descripcion:
      "Retroexcavadora compacta y versátil, ideal para trabajos urbanos, zanjeo y carga en espacios reducidos.",
    especificaciones: [
      { label: "Motor", valor: "Cat C4.4 ACERT" },
      { label: "Profundidad de excavación", valor: "4.27 m" },
      { label: "Capacidad de cargador", valor: "1.3 m³" },
      { label: "Horas de uso", valor: "4 300 h" },
    ],
    imagen: "",
  },
  {
    id: 7,
    nombre: "Volquete Articulado 730C2",
    marca: "Caterpillar",
    categoria: "Volquetes",
    año: 2019,
    condicion: "Usado",
    potencia: "257 kW (345 HP)",
    peso: "24 300 kg",
    ubicacion: "Ate, Lima",
    descripcion:
      "Volquete articulado para transporte de materiales en terrenos difíciles, con gran capacidad de carga y estabilidad todo terreno.",
    especificaciones: [
      { label: "Motor", valor: "Cat C13 ACERT" },
      { label: "Capacidad de carga", valor: "28 t" },
      { label: "Capacidad de tolva", valor: "17 m³" },
      { label: "Horas de uso", valor: "6 100 h" },
    ],
    imagen: "",
  },
  {
    id: 8,
    nombre: "Excavadora ZX210",
    marca: "Hitachi",
    categoria: "Excavadoras",
    año: 2018,
    condicion: "Usado",
    potencia: "123 kW (165 HP)",
    peso: "21 200 kg",
    ubicacion: "La Victoria, Lima",
    descripcion:
      "Excavadora de alto rendimiento para minería y construcción pesada, con sistema hidráulico HIOS IV de última generación.",
    especificaciones: [
      { label: "Motor", valor: "Isuzu AA-6HK1X" },
      { label: "Capacidad de cucharón", valor: "0.93 m³" },
      { label: "Profundidad de excavación", valor: "6.83 m" },
      { label: "Horas de uso", valor: "8 900 h" },
    ],
    imagen: "",
  },
  {
    id: 9,
    nombre: "Compactadora Vibratoria CS56",
    marca: "Caterpillar",
    categoria: "Compactadoras",
    año: 2021,
    condicion: "Nuevo",
    potencia: "99 kW (133 HP)",
    peso: "10 700 kg",
    ubicacion: "Ate, Lima",
    descripcion:
      "Rodillo compactador vibratorio de un solo tambor, ideal para compactación de suelos y bases granulares en proyectos viales.",
    especificaciones: [
      { label: "Motor", valor: "Cat C4.4 ACERT" },
      { label: "Ancho de tambor", valor: "2.13 m" },
      { label: "Fuerza centrífuga", valor: "258 kN" },
      { label: "Horas de uso", valor: "0 h" },
    ],
    imagen: "",
    destacado: true,
  },
  {
    id: 10,
    nombre: "Cargador Frontal WA320",
    marca: "Komatsu",
    categoria: "Cargadores Frontales",
    año: 2017,
    condicion: "Usado",
    potencia: "132 kW (177 HP)",
    peso: "15 600 kg",
    ubicacion: "La Victoria, Lima",
    descripcion:
      "Cargador frontal confiable de mediano tonelaje, con transmisión de cambio automático y sistema de control de tracción.",
    especificaciones: [
      { label: "Motor", valor: "Komatsu SAA6D107E-1" },
      { label: "Capacidad de cucharón", valor: "2.7 m³" },
      { label: "Carga de vuelco", valor: "10 200 kg" },
      { label: "Horas de uso", valor: "10 300 h" },
    ],
    imagen: "",
  },
];
