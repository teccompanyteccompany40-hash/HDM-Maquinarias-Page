import "./TablonAnuncios.css";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  imagen: string;
  titulo: string;
  texto: string;
};

const slides: Slide[] = [
  {
    imagen: "/anuncios/slide-1.jpg",
    titulo: "Nuevo stock de repuestos",
    texto: "Excavadoras Komatsu y Caterpillar disponibles en almacén.",
  },
  {
    imagen: "/anuncios/slide-2.jpg",
    titulo: "Descuentos del mes",
    texto: "Filtros y mangueras hidráulicas con precios especiales.",
  },
  {
    imagen: "/anuncios/slide-3.jpg",
    titulo: "Despacho a todo el Perú",
    texto: "Entregas garantizadas en 24 - 48 horas.",
  },
  {
    imagen: "/anuncios/slide-4.jpg",
    titulo: "Servicio técnico especializado",
    texto: "Soporte en Arequipa, Lima y provincias.",
  },
];

export default function TablonAnuncios() {
  const [activo, setActivo] = useState(0);

  const siguiente = useCallback(() => {
    setActivo((a) => (a + 1) % slides.length);
  }, []);

  const anterior = () => {
    setActivo((a) => (a - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const id = setInterval(siguiente, 5000);
    return () => clearInterval(id);
  }, [siguiente]);

  return (
    <section className="tablon">
      <div className="tablon-track">
        {slides.map((s, i) => (
          <div
            key={s.titulo}
            className={`tablon-slide ${i === activo ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.imagen})` }}
          >
            <div className="tablon-slide-overlay" />
            <div className="tablon-slide-content">
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="tablon-arrow left" onClick={anterior} aria-label="Anterior">
        <ChevronLeft size={22} />
      </button>
      <button className="tablon-arrow right" onClick={siguiente} aria-label="Siguiente">
        <ChevronRight size={22} />
      </button>

      <div className="tablon-dots">
        {slides.map((s, i) => (
          <button
            key={s.titulo}
            className={i === activo ? "active" : ""}
            onClick={() => setActivo(i)}
            aria-label={`Ir al anuncio ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
