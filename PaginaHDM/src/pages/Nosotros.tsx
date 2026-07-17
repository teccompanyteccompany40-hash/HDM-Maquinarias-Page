import "./pages.css";
import { Link } from "react-router-dom";
import AlbumSectores from "../components/AlbumSectores";
import {
  ShieldCheck,
  Users,
  FileCheck2,
  Leaf,
  HeartHandshake,
  Target,
  Eye,
  Award,
  Handshake,
  Recycle,
  BadgeCheck,
} from "lucide-react";

export default function Nosotros() {
  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link> / <span>Nosotros</span>
          </div>
          <h1>
            Conoce <span>PeruTractor</span>
          </h1>
          <p>
            Más de 15 años impulsando la operación de nuestros clientes con
            repuestos y maquinaria de calidad, respaldo técnico y compromiso
            responsable.
          </p>
        </div>
      </div>

      <section id="acerca" className="nosotros-section">
        <div className="nosotros-section-inner">
          <span className="tag">Acerca de PeruTractor</span>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 16px" }}>
            Quiénes somos
          </h2>
          <p
            style={{
              color: "#555",
              maxWidth: 780,
              lineHeight: 1.7,
              marginBottom: 10,
            }}
          >
            PeruTractor es una empresa peruana especializada en la
            comercialización de repuestos y maquinaria pesada para los sectores
            de minería, construcción, transporte e industria. Contamos con un
            amplio stock de piezas originales y alternativas, así como
            maquinaria nueva, usada y reacondicionada, respaldada por un equipo
            técnico especializado.{" "}
            <em>
              (Texto de referencia — información a completar por el cliente.)
            </em>
          </p>

          <div className="nosotros-grid-3">
            <div className="info-card">
              <Target size={26} color="#b8860b" />
              <h4 style={{ marginTop: 12 }}>Misión</h4>
              <p>
                Proveer repuestos y maquinaria de calidad, con disponibilidad
                inmediata y asesoría técnica, garantizando la continuidad
                operativa de nuestros clientes.
              </p>
            </div>
            <div className="info-card">
              <Eye size={26} color="#b8860b" />
              <h4 style={{ marginTop: 12 }}>Visión</h4>
              <p>
                Ser la empresa líder en el suministro de repuestos y maquinaria
                pesada en el Perú, reconocida por su calidad, respaldo y
                cercanía con el cliente.
              </p>
            </div>
            <div className="info-card">
              <Award size={26} color="#b8860b" />
              <h4 style={{ marginTop: 12 }}>Compromiso</h4>
              <p>
                Trabajamos bajo altos estándares de calidad, seguridad y ética
                empresarial en cada proceso de nuestra operación.
              </p>
            </div>
          </div>

          <div className="valores-grid">
            <div className="valor-item">
              <div className="valor-icon">
                <BadgeCheck size={24} />
              </div>
              <h5>Calidad</h5>
              <p>Productos certificados y garantizados</p>
            </div>
            <div className="valor-item">
              <div className="valor-icon">
                <Handshake size={24} />
              </div>
              <h5>Confianza</h5>
              <p>Relaciones a largo plazo con nuestros clientes</p>
            </div>
            <div className="valor-item">
              <div className="valor-icon">
                <HeartHandshake size={24} />
              </div>
              <h5>Compromiso</h5>
              <p>Respuesta rápida ante cada requerimiento</p>
            </div>
            <div className="valor-item">
              <div className="valor-icon">
                <ShieldCheck size={24} />
              </div>
              <h5>Seguridad</h5>
              <p>Cumplimiento de normativas y protocolos</p>
            </div>
          </div>
        </div>
      </section>

      <div id="sectores">
        <AlbumSectores />
      </div>

      <section id="responsabilidad" className="nosotros-section">
        <div className="nosotros-section-inner">
          <span className="tag">Compromiso social</span>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 16px" }}>
            Responsabilidad social
          </h2>
          <p
            style={{
              color: "#555",
              maxWidth: 780,
              lineHeight: 1.7,
              marginBottom: 26,
            }}
          >
            Impulsamos iniciativas que generan valor para nuestros
            colaboradores, la comunidad y el medio ambiente.{" "}
            <em>(Contenido de referencia — a completar.)</em>
          </p>
          <div className="nosotros-grid-3">
            <div className="info-card">
              <Leaf size={24} color="#3a8f5f" />
              <h4 style={{ marginTop: 12 }}>Cuidado ambiental</h4>
              <p>
                Programas de disposición responsable de residuos y aceites
                usados.
              </p>
            </div>
            <div className="info-card">
              <Users size={24} color="#3a8f5f" />
              <h4 style={{ marginTop: 12 }}>Desarrollo local</h4>
              <p>
                Generación de empleo y capacitación técnica para jóvenes de la
                comunidad.
              </p>
            </div>
            <div className="info-card">
              <Recycle size={24} color="#3a8f5f" />
              <h4 style={{ marginTop: 12 }}>Economía circular</h4>
              <p>
                Reacondicionamiento de maquinaria y componentes para extender su
                vida útil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trabaje" className="nosotros-section">
        <div className="nosotros-section-inner">
          <span className="tag">Únete al equipo</span>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 16px" }}>
            Trabaje con nosotros
          </h2>
          <p
            style={{
              color: "#555",
              maxWidth: 780,
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Buscamos personas comprometidas con la excelencia y el trabajo en
            equipo. Si quieres formar parte de PeruTractor, envíanos tu CV.
            <em> (Contenido de referencia — a completar.)</em>
          </p>
          <Link
            to="/contacto"
            className="btn-primary"
            style={{ display: "inline-block" }}
          >
            Enviar mi CV
          </Link>
        </div>
      </section>

      <section id="politicas" className="nosotros-section">
        <div className="nosotros-section-inner">
          <span className="tag">Gestión de calidad</span>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 16px" }}>
            Políticas integrales
          </h2>
          <p
            style={{
              color: "#555",
              maxWidth: 780,
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Nuestras políticas de calidad, seguridad y medio ambiente guían cada
            una de nuestras operaciones.{" "}
            <em>(Contenido de referencia — a completar.)</em>
          </p>
          <div className="nosotros-grid-3">
            <div className="info-card">
              <FileCheck2 size={24} color="#b8860b" />
              <h4 style={{ marginTop: 12 }}>Política de calidad</h4>
              <p>
                Procesos certificados que garantizan la trazabilidad de cada
                producto.
              </p>
            </div>
            <div className="info-card">
              <ShieldCheck size={24} color="#b8860b" />
              <h4 style={{ marginTop: 12 }}>Seguridad y salud</h4>
              <p>
                Protocolos de prevención de riesgos en todas nuestras sedes.
              </p>
            </div>
            <div className="info-card">
              <Leaf size={24} color="#b8860b" />
              <h4 style={{ marginTop: 12 }}>Medio ambiente</h4>
              <p>Gestión responsable de residuos y consumo de recursos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cumplimiento" className="nosotros-section">
        <div className="nosotros-section-inner">
          <span className="tag">Ética empresarial</span>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "10px 0 16px" }}>
            Sistema de cumplimiento
          </h2>
          <p style={{ color: "#555", maxWidth: 780, lineHeight: 1.7 }}>
            Contamos con un sistema de cumplimiento normativo que promueve la
            transparencia, la prevención del fraude y el respeto a la
            legislación vigente en todas nuestras operaciones.{" "}
            <em>(Contenido de referencia — a completar.)</em>
          </p>
        </div>
      </section>
    </>
  );
}
