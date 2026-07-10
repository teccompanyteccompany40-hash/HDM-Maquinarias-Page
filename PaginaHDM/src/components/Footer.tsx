import "./Footer.css";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <img src="/logo.png" alt="HDM Maquinarias" className="footer-logo" />
          <p>
            Especialistas en repuestos para maquinaria pesada. Calidad,
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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Repuestos</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
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
            <li><MapPin size={16} /> Arequipa, Perú</li>
            <li><Phone size={16} /> +51 954 123 456</li>
            <li><Mail size={16} /> ventas@hdmmaquinarias.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 HDM Maquinarias. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
