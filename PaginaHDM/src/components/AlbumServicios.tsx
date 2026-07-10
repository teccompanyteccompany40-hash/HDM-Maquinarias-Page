import "./AlbumServicios.css";
import { Wrench, Truck, ClipboardCheck, Headphones } from "lucide-react";

const servicios = [
  {
    icon: Wrench,
    titulo: "Mantenimiento preventivo",
    desc: "Diagnóstico y mantenimiento programado de maquinaria pesada.",
  },
  {
    icon: Truck,
    titulo: "Despacho a nivel nacional",
    desc: "Entregamos tus repuestos donde estés, con tiempos garantizados.",
  },
  {
    icon: ClipboardCheck,
    titulo: "Asesoría técnica",
    desc: "Te ayudamos a identificar el repuesto correcto para tu equipo.",
  },
  {
    icon: Headphones,
    titulo: "Soporte post-venta",
    desc: "Atención continua ante cualquier duda o incidencia.",
  },
];

export default function AlbumServicios() {
  return (
    <section className="servicios">
      <div className="section-wrap">
        <div className="section-title">
          <span className="tag">Lo que ofrecemos</span>
          <h2>
            Álbum de <span>servicios</span>
          </h2>
        </div>

        <div className="servicios-grid">
          {servicios.map((s) => (
            <div className="servicio-item" key={s.titulo}>
              <div className="servicio-icon">
                <s.icon size={24} />
              </div>
              <div>
                <h4>{s.titulo}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
