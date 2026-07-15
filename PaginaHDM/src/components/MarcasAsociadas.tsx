import "./MarcasAsociadas.css";

// Marcas reales con las que trabaja HDM, según el catálogo de productos.
const marcas = [
  "CATERPILLAR",
  "CTP / CAT REMAN",
  "BLUMAQ",
  "PERKINS",
  "SKF",
  "FAG",
  "NTN",
  "TIMKEN",
  "IPD",
  "NOK",
  "FP DIESEL",
  "HANDOK",
];

export default function MarcasAsociadas() {
  // Duplicamos la lista para lograr un carrusel continuo (loop infinito)
  const marcasLoop = [...marcas, ...marcas];

  return (
    <section className="marcas">
      <div className="section-wrap marcas-wrap">
        <p className="marcas-label">Trabajamos con las mejores marcas del mercado</p>
        <div className="marcas-track-mask">
          <div className="marcas-track">
            {marcasLoop.map((m, i) => (
              <div className="marca-item" key={`${m}-${i}`}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
