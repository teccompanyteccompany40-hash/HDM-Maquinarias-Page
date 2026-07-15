import "./pages.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link> / <span>Contacto</span>
          </div>
          <h1>
            Hablemos de tu <span>próximo proyecto</span>
          </h1>
          <p>Nuestro equipo comercial y técnico está listo para ayudarte.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="contacto-layout">
          <div className="contacto-left">
            <h2>
              Hablemos de tu <span>Próximo Proyecto</span>
            </h2>
            <p>
              Nuestro equipo evaluará tu requerimiento técnico y te enviará una
              cotización formal B2B ajustada a las exigencias de tu flota.
            </p>

            <div className="contacto-info-item">
              <Phone size={20} />
              <div>
                <strong>Líneas directas / WhatsApp</strong>
                <span>(01) 4341400 · +51 924 877 117</span>
              </div>
            </div>
            <div className="contacto-info-item">
              <Mail size={20} />
              <div>
                <strong>Correo corporativo</strong>
                <span>info@perutractor.com</span>
              </div>
            </div>
            <div className="contacto-info-item">
              <MapPin size={20} />
              <div>
                <strong>Sedes operativas</strong>
                <span>Ate (Sede Principal) · La Victoria (Sede Arriola)</span>
              </div>
            </div>
          </div>

          <div className="contacto-right">
            <h2>Solicitar cotización</h2>
            <p>
              Completa el formulario y un asesor experto se comunicará contigo a
              la brevedad.
            </p>

            {enviado ? (
              <p style={{ color: "#333" }}>
                ¡Gracias! Hemos recibido tu mensaje, un asesor se contactará
                contigo pronto.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Nombre completo *</label>
                  <input required placeholder="Ej. Juan Pérez" />
                </div>
                <div className="form-cols-2">
                  <div className="form-row">
                    <label>Teléfono / WhatsApp *</label>
                    <input required placeholder="+51 999 999 999" />
                  </div>
                  <div className="form-row">
                    <label>Correo corporativo *</label>
                    <input
                      type="email"
                      required
                      placeholder="juan@tuempresa.com"
                    />
                  </div>
                </div>
                <div className="form-cols-2">
                  <div className="form-row">
                    <label>RUC *</label>
                    <input required placeholder="Número RUC" />
                  </div>
                  <div className="form-row">
                    <label>Razón social *</label>
                    <input required placeholder="Nombre de la empresa" />
                  </div>
                </div>
                <div className="form-row">
                  <label>Detalles del requerimiento</label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos un poco más sobre el modelo de máquina, marca de preferencia o problema a resolver..."
                  />
                </div>
                <button type="submit" className="submit-quote-btn">
                  <Send size={17} /> Enviar solicitud
                </button>
                <p className="form-note">
                  Tus datos están seguros. Solo los usaremos para responder a tu
                  solicitud comercial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <section id="sedes" className="sedes-section">
        <div className="page-body">
          <div className="section-title">
            <span className="tag">Encuéntranos</span>
            <h2>
              Nuestras <span>sedes</span>
            </h2>
            <p>Visítanos en cualquiera de nuestros puntos de atención.</p>
          </div>

          <div className="sedes-grid">
            <div className="sede-card">
              <MapPin size={22} />
              <h4>Sede Principal — Ate</h4>
              <p>Av. Nicolás Ayllón, Ate, Lima</p>
              <span>
                Lun. a Vie. 8:00 am – 6:00 pm · Sáb. 8:00 am – 1:00 pm
              </span>
            </div>
            <div className="sede-card">
              <MapPin size={22} />
              <h4>Sede Arriola — La Victoria</h4>
              <p>Av. Nicolás Arriola, La Victoria, Lima</p>
              <span>
                Lun. a Vie. 8:00 am – 6:00 pm · Sáb. 8:00 am – 1:00 pm
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
