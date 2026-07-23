import "./BlogDestacados.css";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    fecha: "02 Jul 2026",
    titulo: "Cómo elegir el filtro hidráulico correcto",
    resumen: "Guía práctica para identificar el filtro adecuado según tu equipo.",
  },
  {
    fecha: "24 Jun 2026",
    titulo: "Mantenimiento preventivo: ahorra en reparaciones",
    resumen: "Claves para reducir tiempos de inactividad de tu maquinaria.",
  },
  {
    fecha: "10 Jun 2026",
    titulo: "Repuestos originales vs. alternativos",
    resumen: "Ventajas y diferencias para tomar la mejor decisión.",
  },
];

export default function BlogDestacados() {
  return (
    <section className="blog">
      <div className="section-wrap">
        <div className="blog-header">
          <div className="section-title blog-title">
            <span className="tag">Blog & Actualidad</span>
            <h2>
              Blog <span>destacados</span>
            </h2>
          </div>

          <Link to="/novedades" className="blog-more-btn">
            Ver más novedades <ArrowRight size={16} />
          </Link>
        </div>

        <div className="blog-grid">
          {posts.map((p) => (
            <article className="blog-card" key={p.titulo}>
              <div className="blog-thumb" />
              <div className="blog-body">
                <span className="blog-fecha">
                  <Calendar size={14} /> {p.fecha}
                </span>
                <h4>{p.titulo}</h4>
                <p>{p.resumen}</p>
                <a href="#">
                  Leer más <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}