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
    titulo:
      "DH & DM Maquinarias SAC. lanza su línea propia de filtros HDM-Filter",
    categoria: "Producto propio",
    fecha: "10 jul. 2026",
    resumen:
      "Nueva línea de filtros de aceite y combustible fabricados bajo estándares internacionales, compatibles con las principales marcas de maquinaria pesada.",
    imagen: "/novedades/excavadora-carguio-camion.png",
  },
  {
    id: 2,
    titulo: "Ampliamos nuestro almacén en La Victoria",
    categoria: "Empresa",
    fecha: "02 jul. 2026",
    resumen:
      "Duplicamos la capacidad de nuestro almacén de repuestos para reducir los tiempos de entrega a nuestros clientes en Lima y provincias.",
    imagen: "/novedades/almacen-la-victoria.png",
  },
  {
    id: 3,
    titulo: "Nueva línea de zapatas y cadenas reforzadas HDM-Track",
    categoria: "Producto propio",
    fecha: "20 jun. 2026",
    resumen:
      "Desarrollamos una línea propia de tren de rodaje reforzado, con mayor vida útil frente a las piezas estándar del mercado.",
    imagen: "/novedades/tren-rodaje-detalle.png",
  },
  {
    id: 4,
    titulo: "Certificación ISO 9001 para nuestros procesos de calidad",
    categoria: "Empresa",
    fecha: "05 jun. 2026",
    resumen:
      "Nuestro sistema de gestión de calidad fue certificado bajo la norma ISO 9001, reafirmando nuestro compromiso con la excelencia.",
    imagen: "/novedades/operacion-subterranea-seguridad.png",
  },
  {
    id: 5,
    titulo: "Nuevo módulo de rastreo de pedidos en línea",
    categoria: "Empresa",
    fecha: "28 may. 2026",
    resumen:
      "Ahora puedes seguir el estado de tu pedido desde la web, desde la confirmación hasta la entrega en obra o almacén.",
    imagen: "/novedades/tajo-vista-aerea.png",
  },
  {
    id: 6,
    titulo: "Alianza con talleres autorizados en Arequipa y Cusco",
    categoria: "Empresa",
    fecha: "15 may. 2026",
    resumen:
      "Sumamos dos nuevos talleres aliados en el sur del país para brindar soporte técnico e instalación de repuestos más cerca de tu operación.",
    imagen: "/novedades/camion-minero-cat-797f.png",
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
    imagen: "/novedades/excavadora-atardecer-cargando.png",
    destacado: true,
  },
  {
    id: 2,
    titulo: "Cotiza tu tren de rodaje y obtén revisión técnica gratuita",
    descripcion:
      "Al solicitar la cotización de cadenas, zapatas o rodillos, incluimos una inspección técnica sin costo en nuestras sedes.",
    vigencia: "Válido hasta el 15 de agosto de 2026",
    imagen: "/novedades/tren-rodaje-detalle.png",
  },
  {
    id: 3,
    titulo: "Compra 3 y paga 2 en empaquetaduras seleccionadas",
    descripcion:
      "Promoción aplicable a kits de empaquetaduras de motor de las marcas Caterpillar y Komatsu.",
    vigencia: "Válido hasta el 10 de agosto de 2026",
    imagen: "/novedades/excavadora-lluvia.png",
  },
  {
    id: 4,
    titulo: "Envío gratis en pedidos mayores a S/ 1500",
    descripcion:
      "Aplicable a despachos dentro de Lima Metropolitana en compras de repuestos para excavadoras, cargadores y tractores.",
    vigencia: "Válido hasta el 20 de agosto de 2026",
    imagen: "/novedades/camion-minero-cat-797f.png",
  },
  {
    id: 5,
    titulo: "Diagnóstico gratuito para clientes con flota de 5+ equipos",
    descripcion:
      "Empresas con flotas grandes acceden a una evaluación técnica sin costo para planificar su mantenimiento anual.",
    vigencia: "Válido hasta el 30 de agosto de 2026",
    imagen: "/novedades/excavadora-cat-6060.png",
  },
];