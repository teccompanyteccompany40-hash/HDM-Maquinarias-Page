import "./BlogDestacados.css";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

const posts = blogPosts.slice(0, 3);

export default function BlogDestacados() {
  return (
    <section className="blog">
      <div className="section-wrap">
        <div className="section-title">
          <span className="tag">Novedades</span>
          <h2>
            Blog <span>destacados</span>
          </h2>
        </div>

        <div className="blog-grid">
          {posts.map((p) => (
            <article className="blog-card" key={p.id}>
              <div className="blog-thumb" />
              <div className="blog-body">
                <span className="blog-fecha">
                  <Calendar size={14} /> {p.fecha}
                </span>
                <h4>{p.titulo}</h4>
                <p>{p.resumen}</p>
                <Link to={`/blog/${p.id}`}>
                  Leer más <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-ver-todos">
          <Link to="/blog" className="btn-outline-sm">
            Ver todos los artículos <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
