import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContacts from "./components/FloatingContacts";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Maquinaria from "./pages/Maquinaria";
import MaquinariaDetalle from "./pages/MaquinariaDetalle";
import Repuestos from "./pages/Repuestos";
import RepuestoDetalle from "./pages/RepuestoDetalle";
import Novedades from "./pages/Novedades";
import Blog from "./pages/Blog";
import BlogDetalle from "./pages/BlogDetalle";
import Promociones from "./pages/Promociones";
import Cotizacion from "./pages/Cotizacion";
import Contacto from "./pages/Contacto";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/maquinaria" element={<Maquinaria />} />
        <Route path="/maquinaria/:id" element={<MaquinariaDetalle />} />
        <Route path="/repuestos" element={<Repuestos />} />
        <Route path="/repuestos/:id" element={<RepuestoDetalle />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetalle />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/cotizacion" element={<Cotizacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingContacts />
    </>
  );
}

export default App;
