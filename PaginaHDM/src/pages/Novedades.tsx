import "./pages.css";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { novedades } from "../data/novedadesPromociones";

export default function Novedades() {
  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link> / <span>Novedades</span>
          </div>
          <h1>
            <span>Novedades</span> PeruTractor
          </h1>
          <p>
            Conoce nuestros productos propios, mejoras y noticias sobre la empresa.
          </p>
        </div>
      </div>

      <div className="page-body">
        <div className="novedades-grid">
          {novedades.map((n) => (
            <div className="novedad-card" key={n.id}>
              <div className="novedad-media" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={36} color="#f4c20d" />
              </div>
              <div className="novedad-body">
                <div className="novedad-meta">
                  <span className="novedad-tag-cat">{n.categoria}</span>
                  <span className="novedad-fecha">{n.fecha}</span>
                </div>
                <h3>{n.titulo}</h3>
                <p>{n.resumen}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
