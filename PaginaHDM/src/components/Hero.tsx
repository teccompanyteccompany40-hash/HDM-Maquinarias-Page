import "./Hero.css";
import { ShieldCheck, Truck, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-tag">Repuestos originales y alternativos</span>
        <h1>
          Repuestos para <span>maquinaria pesada</span> en los que puedes confiar
        </h1>
        <p>
          Más de 15 años abasteciendo a la minería, construcción y transporte con
          repuestos de calidad, stock permanente y atención técnica especializada.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Solicitar cotización</button>
          <button className="btn-secondary">Ver catálogo</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <Truck size={26} />
            <div>
              <strong>+2000</strong>
              <span>Despachos anuales</span>
            </div>
          </div>
          <div className="stat">
            <Wrench size={26} />
            <div>
              <strong>+5000</strong>
              <span>Repuestos en stock</span>
            </div>
          </div>
          <div className="stat">
            <ShieldCheck size={26} />
            <div>
              <strong>100%</strong>
              <span>Garantía de calidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
