export interface Novedad {
  id: number;
  titulo: string;
  categoria: string;
  fecha: string;
  resumen: string;
  imagen: string;
}

export const novedades: Novedad[] = [
  {
    id: 1,
    titulo: "PeruTractor lanza su línea propia de filtros HDM-Filter",
    categoria: "Producto propio",
    fecha: "10 jul. 2026",
    resumen:
      "Nueva línea de filtros de aceite y combustible fabricados bajo estándares internacionales, compatibles con las principales marcas de maquinaria pesada.",
    imagen: "",
  },
  {
    id: 2,
    titulo: "Ampliamos nuestro almacén en La Victoria",
    categoria: "Empresa",
    fecha: "02 jul. 2026",
    resumen:
      "Duplicamos la capacidad de nuestro almacén de repuestos para reducir los tiempos de entrega a nuestros clientes en Lima y provincias.",
    imagen: "",
  },
  {
    id: 3,
    titulo: "Nueva línea de zapatas y cadenas reforzadas HDM-Track",
    categoria: "Producto propio",
    fecha: "20 jun. 2026",
    resumen:
      "Desarrollamos una línea propia de tren de rodaje reforzado, con mayor vida útil frente a las piezas estándar del mercado.",
    imagen: "",
  },
  {
    id: 4,
    titulo: "Certificación ISO 9001 para nuestros procesos de calidad",
    categoria: "Empresa",
    fecha: "05 jun. 2026",
    resumen:
      "Nuestro sistema de gestión de calidad fue certificado bajo la norma ISO 9001, reafirmando nuestro compromiso con la excelencia.",
    imagen: "",
  },
];

export interface Promocion {
  id: number;
  titulo: string;
  descripcion: string;
  vigencia: string;
  imagen: string;
  destacado?: boolean;
}

export const promociones: Promocion[] = [
  {
    id: 1,
    titulo: "20% de descuento en filtros para mantenimiento preventivo",
    descripcion:
      "Válido en la compra de kits de filtros de aceite, combustible y aire para las principales marcas de maquinaria pesada.",
    vigencia: "Válido hasta el 31 de julio de 2026",
    imagen: "",
    destacado: true,
  },
  {
    id: 2,
    titulo: "Cotiza tu tren de rodaje y obtén revisión técnica gratuita",
    descripcion:
      "Al solicitar la cotización de cadenas, zapatas o rodillos, incluimos una inspección técnica sin costo en nuestras sedes.",
    vigencia: "Válido hasta el 15 de agosto de 2026",
    imagen: "",
  },
  {
    id: 3,
    titulo: "Compra 3 y paga 2 en empaquetaduras seleccionadas",
    descripcion:
      "Promoción aplicable a kits de empaquetaduras de motor de las marcas Caterpillar y Komatsu.",
    vigencia: "Válido hasta el 10 de agosto de 2026",
    imagen: "",
  },
];
