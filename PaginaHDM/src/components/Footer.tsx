import "./Footer.css";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <img src="/logo.png" alt="PeruTractor" className="footer-logo" />
          <p>
            Especialistas en repuestos y maquinaria pesada. Calidad,
            respaldo y disponibilidad para tu operación.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/maquinaria">Maquinaria</Link></li>
            <li><Link to="/repuestos">Repuestos</Link></li>
            <li><Link to="/novedades">Novedades</Link></li>
            <li><Link to="/promociones">Promociones</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/contacto#sedes">Nuestras sedes</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Sectores</h4>
          <ul>
            <li><a href="#">Minería</a></li>
            <li><a href="#">Construcción</a></li>
            <li><a href="#">Forestal</a></li>
            <li><a href="#">Industrial</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li><MapPin size={16} /> Ate (Sede Principal) / La Victoria (Sede Arriola), Lima</li>
            <li><Phone size={16} /> (01) 4341400 / +51 924 877 117</li>
            <li><Mail size={16} /> info@perutractor.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PeruTractor. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
