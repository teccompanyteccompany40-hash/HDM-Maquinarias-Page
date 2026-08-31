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

// Logos disponibles para algunas marcas (deben existir en public/marcas/).
// Si una marca no tiene logo aquí, se muestra como texto (comportamiento anterior).
const marcaLogos: Record<string, string> = {
  BLUMAQ: "/marcas/Blumaq.png",
  CATERPILLAR: "/marcas/CAT.jpg",
  "CTP / CAT REMAN": "/marcas/CTP.jpg",
  IPD: "/marcas/IPD.png",
};

export default function MarcasAsociadas() {
  // Duplicamos la lista para lograr un carrusel continuo (loop infinito)
  const marcasLoop = [...marcas, ...marcas];

  return (
    <section className="marcas">
      <div className="section-wrap marcas-wrap">
        <p className="marcas-label">Trabajamos con las mejores marcas del mercado</p>
        <div className="marcas-track-mask">
          <div className="marcas-track">
            {marcasLoop.map((m, i) => {
              const logo = marcaLogos[m];
              return (
                <div className="marca-item" key={`${m}-${i}`}>
                  {logo ? (
                    <img src={logo} alt={m} className="marca-logo" />
                  ) : (
                    m
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
