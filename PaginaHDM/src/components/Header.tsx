import "./Header.css";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-left">
        <img src="/logo.png" alt="HDM Maquinarias" className="logo" />
      </div>

      {/* Menú */}
      <nav className="navbar">
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <a href="#">Repuestos</a>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>
      </nav>

      {/* Acciones */}
      <div className="header-right">
        <div className="search-box">
          <Search size={20} />
          <input type="text" placeholder="Buscar repuestos..." />
        </div>

        <button className="quote-btn">Cotizar</button>
      </div>
    </header>
  );
}
