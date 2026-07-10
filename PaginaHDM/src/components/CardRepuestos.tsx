import "./CardRepuestos.css";
import { useState } from "react";
import { Package } from "lucide-react";

const categorias = ["Todos", "Motor", "Hidráulico", "Tren de rodaje", "Eléctrico"];

const repuestos = [
  { nombre: "Filtro de aceite HD", cat: "Motor", codigo: "FA-2231" },
  { nombre: "Bomba hidráulica principal", cat: "Hidráulico", codigo: "BH-5541" },
  { nombre: "Zapata de oruga", cat: "Tren de rodaje", codigo: "ZO-1190" },
  { nombre: "Alternador 24V", cat: "Eléctrico", codigo: "AL-3320" },
  { nombre: "Kit de empaquetadura de motor", cat: "Motor", codigo: "KE-4410" },
  { nombre: "Cilindro hidráulico de brazo", cat: "Hidráulico", codigo: "CH-7761" },
];

export default function CardRepuestos() {
  const [activa, setActiva] = useState("Todos");

  const filtrados =
    activa === "Todos" ? repuestos : repuestos.filter((r) => r.cat === activa);

  return (
    <section className="repuestos">
      <div className="section-wrap">
        <div className="section-title">
          <span className="tag">Inventario</span>
          <h2>
            Card de <span>repuestos</span>
          </h2>
        </div>

        <div className="repuestos-filtros">
          {categorias.map((c) => (
            <button
              key={c}
              className={`filtro-btn ${activa === c ? "active" : ""}`}
              onClick={() => setActiva(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="repuestos-grid">
          {filtrados.map((r) => (
            <div className="repuesto-card" key={r.codigo}>
              <div className="repuesto-thumb">
                <Package size={34} />
              </div>
              <span className="repuesto-cat">{r.cat}</span>
              <h4>{r.nombre}</h4>
              <p>Código: {r.codigo}</p>
              <button className="btn-primary small">Cotizar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
