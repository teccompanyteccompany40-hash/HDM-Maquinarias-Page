import "./pages.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Truck, Send, ShoppingCart } from "lucide-react";
import { useCotizacion } from "../context/CotizacionContext";

const WHATSAPP_NUMERO = "51924877117";

export default function Cotizacion() {
  const { items, quitarItem, actualizarCantidad, vaciarCarrito } =
    useCotizacion();
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    ruc: "",
    razonSocial: "",
    detalles: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const construirMensaje = () => {
    let msg = `*Solicitud de Cotización - DH & DM Maquinarias SAC.*%0A%0A`;
    msg += `*Nombre:* ${form.nombre}%0A`;
    msg += `*Teléfono:* ${form.telefono}%0A`;
    msg += `*Correo:* ${form.correo}%0A`;
    msg += `*RUC:* ${form.ruc}%0A`;
    msg += `*Razón social:* ${form.razonSocial}%0A%0A`;
    msg += `*Productos solicitados:*%0A`;
    items.forEach((i, idx) => {
      msg += `${idx + 1}. ${i.nombre}${i.codigo ? ` (Cód. ${i.codigo})` : ""} — Cant: ${i.cantidad} [${
        i.tipo === "repuesto" ? "Repuesto" : "Maquinaria"
      }]%0A`;
    });
    if (form.detalles) msg += `%0A*Detalles adicionales:*%0A${form.detalles}`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${construirMensaje()}`;
    window.open(url, "_blank");
    setEnviado(true);
  };

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link> / <span>Mi cotización</span>
          </div>
          <h1>
            Mi <span>Cotización</span>
          </h1>
          <p>
            Revisa los productos y equipos seleccionados y envíanos tu
            solicitud. Un asesor se comunicará contigo para confirmar precios y
            disponibilidad.
          </p>
        </div>
      </div>

      <div className="page-body">
        <div className="cotizacion-layout">
          <div>
            {items.length === 0 ? (
              <div className="cart-table">
                <div className="cart-empty">
                  <ShoppingCart
                    size={40}
                    color="#ccc"
                    style={{ marginBottom: 12 }}
                  />
                  <p>
                    Aún no has agregado productos a tu cotización.
                    <br />
                    Explora el{" "}
                    <Link to="/repuestos">catálogo de repuestos</Link> o el{" "}
                    <Link to="/maquinaria">catálogo de maquinaria</Link>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="cart-table">
                <div className="cart-toolbar">
                  <strong>{items.length} producto(s) en tu cotización</strong>
                  <button className="cart-clear-btn" onClick={vaciarCarrito}>
                    Vaciar carrito
                  </button>
                </div>

                {items.map((item) => (
                  <div className="cart-item-row" key={item.uid}>
                    <div className="cart-item-thumb">
                      {item.tipo === "repuesto" ? (
                        <Package size={22} />
                      ) : (
                        <Truck size={22} />
                      )}
                    </div>
                    <div className="cart-item-info">
                      <strong>{item.nombre}</strong>
                      <span>
                        {item.codigo ? `Código: ${item.codigo} · ` : ""}
                        {item.marca}
                      </span>
                      <span className={`cart-item-badge ${item.tipo}`}>
                        {item.tipo === "repuesto" ? "Repuesto" : "Maquinaria"}
                      </span>
                    </div>
                    <div className="cart-qty">
                      <button
                        onClick={() =>
                          actualizarCantidad(item.uid, item.cantidad - 1)
                        }
                      >
                        −
                      </button>
                      <span>{item.cantidad}</span>
                      <button
                        onClick={() =>
                          actualizarCantidad(item.uid, item.cantidad + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <span style={{ fontSize: 13, color: "#888" }}>
                      Cant: {item.cantidad}
                    </span>
                    <button
                      className="cart-remove"
                      onClick={() => quitarItem(item.uid)}
                    >
                      Quitar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="quote-form-box">
            <h3>Solicitar cotización</h3>
            <p>
              Completa tus datos y un asesor experto se comunicará contigo a la
              brevedad.
            </p>

            {enviado ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <p style={{ marginBottom: 14, color: "#333" }}>
                  ¡Tu solicitud fue enviada por WhatsApp! Nuestro equipo se
                  pondrá en contacto contigo pronto.
                </p>
                <button
                  className="clear-filters"
                  onClick={() => setEnviado(false)}
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Nombre completo *</label>
                  <input
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="form-cols-2">
                  <div className="form-row">
                    <label>Teléfono / WhatsApp *</label>
                    <input
                      name="telefono"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  <div className="form-row">
                    <label>Correo corporativo *</label>
                    <input
                      name="correo"
                      type="email"
                      required
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="juan@tuempresa.com"
                    />
                  </div>
                </div>
                <div className="form-cols-2">
                  <div className="form-row">
                    <label>RUC</label>
                    <input
                      name="ruc"
                      value={form.ruc}
                      onChange={handleChange}
                      placeholder="Número RUC"
                    />
                  </div>
                  <div className="form-row">
                    <label>Razón social</label>
                    <input
                      name="razonSocial"
                      value={form.razonSocial}
                      onChange={handleChange}
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label>Detalles adicionales</label>
                  <textarea
                    name="detalles"
                    rows={3}
                    value={form.detalles}
                    onChange={handleChange}
                    placeholder="Modelo de máquina, marca de preferencia, urgencia, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="submit-quote-btn"
                  disabled={items.length === 0}
                >
                  <Send size={17} /> Enviar solicitud por WhatsApp
                </button>
                <p className="form-note">
                  Tus datos están seguros. Solo los usaremos para responder tu
                  solicitud comercial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
