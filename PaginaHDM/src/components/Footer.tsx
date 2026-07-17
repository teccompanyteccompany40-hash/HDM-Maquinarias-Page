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
          <img src="../../public/logo.png" className="footer-logo" />
          <p>
            Especialistas en repuestos y maquinaria pesada. Calidad, respaldo y
            disponibilidad para tu operación.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              ig
            </a>
            <a href="#" aria-label="LinkedIn">
              in
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
              <MapPin size={16} /> Sede Principal: Sr. Apurimas 1067 , Suliaca ,
              Puno
            </li>
            <li>
              <Clock10Icon size={16} /> Atencion: Lunes a Viernes 8am-7pm
              Sábados 8am-5pm
            </li>
            <li>
              <Phone size={16} /> +51 977272747
            </li>
            <li>
              <Mail size={16} /> info@DH&DM.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PeruTractor. Todos los derechos reservados.</p>
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
