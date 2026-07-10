import "./TablonAnuncios.css";
import { Megaphone } from "lucide-react";

const anuncios = [
  "🚛 Nuevo stock de repuestos para excavadoras Komatsu y Caterpillar",
  "🛠️ Descuentos especiales en filtros y mangueras hidráulicas este mes",
  "📦 Despacho a todo el Perú en 24-48 horas",
  "🔧 Servicio técnico especializado disponible en Arequipa y Lima",
];

export default function TablonAnuncios() {
  return (
    <div className="tablon">
      <div className="tablon-icon">
        <Megaphone size={18} />
      </div>
      <div className="tablon-track">
        <div className="tablon-content">
          {[...anuncios, ...anuncios].map((a, i) => (
            <span key={i}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
