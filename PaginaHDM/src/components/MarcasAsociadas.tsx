import "./MarcasAsociadas.css";

const marcas = [
  "CATERPILLAR",
  "KOMATSU",
  "VOLVO",
  "JOHN DEERE",
  "HITACHI",
  "LIEBHERR",
  "CUMMINS",
  "SANY",
];

export default function MarcasAsociadas() {
  return (
    <section className="marcas">
      <div className="section-wrap marcas-wrap">
        <p className="marcas-label">Trabajamos con las mejores marcas del mercado</p>
        <div className="marcas-grid">
          {marcas.map((m) => (
            <div className="marca-item" key={m}>
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
