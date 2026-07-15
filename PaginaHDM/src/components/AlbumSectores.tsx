import "./AlbumSectores.css";
import { Mountain, HardHat, Truck } from "lucide-react";

const sectores = [
  { icon: Mountain, nombre: "Minería" },
  { icon: HardHat, nombre: "Construcción" },
  { icon: Truck, nombre: "Transporte" },
];

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
            <div className="sector-card" key={s.nombre}>
              <s.icon size={40} />
              <h4>{s.nombre}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
