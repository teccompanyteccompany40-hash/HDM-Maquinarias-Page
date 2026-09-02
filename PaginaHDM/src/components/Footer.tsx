import "./Footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock10Icon } from "lucide-react";
import LegalModal from "../components/shared/LegalModal";

export default function Footer() {
  const [modal, setModal] = useState<"terms" | "privacy" | null>(null);
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <img src="/logo.png" className="footer-logo" alt="DH & DM Maquinarias" />
          <p>
            Especialistas en repuestos y maquinaria pesada. Calidad, respaldo y
            disponibilidad para tu operación.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61588299007615&locale=es_LA"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>
            <a
              href="https://wa.me/51977272747"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                <path d="M16.04 3C9.4 3 4 8.36 4 15c0 2.34.66 4.53 1.8 6.4L4 29l7.8-1.75A11.9 11.9 0 0 0 16.04 27C22.68 27 28 21.64 28 15S22.68 3 16.04 3zm0 21.6a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-4.63 1.04 1.06-4.5-.23-.37A9.55 9.55 0 1 1 16.04 24.6zm5.4-7.1c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.16-.17.2-.34.22-.63.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@dhdm12?is_from_webapp=1&sender_device=pc"
              aria-label="TikTok"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.6h-3.06v13.9c0 1.53-1.24 2.78-2.78 2.78a2.78 2.78 0 0 1-2.78-2.78 2.78 2.78 0 0 1 2.78-2.78c.29 0 .56.04.82.12V10.4a5.9 5.9 0 0 0-.82-.06A5.85 5.85 0 0 0 3.5 16.19 5.85 5.85 0 0 0 9.36 22a5.85 5.85 0 0 0 5.85-5.81V9.4a9.2 9.2 0 0 0 5.38 1.73V8.07a5.9 5.9 0 0 1-3.99-2.25z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/maquinaria">Maquinaria</Link>
            </li>
            <li>
              <Link to="/repuestos">Repuestos</Link>
            </li>
            <li>
              <Link to="/novedades">Novedades</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/promociones">Promociones</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/contacto#sedes">Nuestras sedes</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Sectores</h4>
          <ul>
            <li>
              <a href="#">Minería</a>
            </li>
            <li>
              <a href="#">Construcción</a>
            </li>
            <li>
              <a href="#">Industrial</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jr.+Apurimac+1067%2C+Juliaca%2C+Puno%2C+Peru"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={16} /> Sede Principal: Jr. Apurímac 1067, Juliaca,
                Puno
              </a>
            </li>
            <li>
              <Clock10Icon size={16} /> Atención: Lunes a Viernes 8am-7pm ·
              Sábados 8am-5pm
            </li>
            <li>
              <a href="tel:+51977272747" target="_blank" rel="noreferrer">
                <Phone size={16} /> +51 977 272 747
              </a>
            </li>
            <li>
              <a href="mailto:info@dhdmmaquinarias.com" target="_blank" rel="noreferrer">
                <Mail size={16} /> info@dhdmmaquinarias.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DH & DM Maquinarias SAC. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <button className="footer-link" onClick={() => setModal("terms")}>
            Términos
          </button>

          <button className="footer-link" onClick={() => setModal("privacy")}>
            Privacidad
          </button>
        </div>
      </div>
      <LegalModal type={modal} onClose={() => setModal(null)} />
    </footer>
  );
}