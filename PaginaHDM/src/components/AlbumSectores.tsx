import "./AlbumSectores.css";
import { Link } from "react-router-dom";
import { sectores } from "../data/sectores";

export default function AlbumSectores() {
  return (
    <section className="sectores">
      <div className="section-wrap">
        <div className="section-title">
          <span className="tag">Experiencia</span>
          <h2>
            Álbum por <span>sectores</span>
          </h2>
          <p>Atendemos a los sectores que mueven la economía del país.</p>
        </div>

        <div className="sectores-grid">
          {sectores.map((s) => (
            <Link
              to={`/nosotros/sectores/${s.slug}`}
              className="sector-card"
              key={s.slug}
              style={{ backgroundImage: `url(${s.imagen})` }}
            >
              <div className="sector-card-overlay" />
              <div className="sector-card-content">
                <h4>{s.nombre}</h4>
                <span className="sector-card-cta">Ver por qué es importante</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
