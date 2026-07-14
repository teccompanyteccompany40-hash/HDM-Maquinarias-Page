import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TablonAnuncios from "./components/TablonAnuncios";
import MarcasAsociadas from "./components/MarcasAsociadas";
import ProductosDestacados from "./components/ProductosDestacados";
import AlbumServicios from "./components/AlbumServicios";
import CardRepuestos from "./components/CardRepuestos";
import AlbumSectores from "./components/AlbumSectores";
import SobreNosotros from "./components/SobreNosotros";
import BlogDestacados from "./components/BlogDestacados";
import Footer from "./components/Footer";
import FloatingContacts from "./components/FloatingContacts";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MarcasAsociadas />
      <TablonAnuncios />
      <ProductosDestacados />
      <AlbumServicios />
      <CardRepuestos />
      <AlbumSectores />
      <SobreNosotros />
      <BlogDestacados />
      <Footer />
      <FloatingContacts />
    </>
  );
}

export default App;
