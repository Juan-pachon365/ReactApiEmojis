import "./style.css";

type Feature = {
  titulo: string;
  descripcion: string;
  emoji: string;
};

const features: Feature[] = [
  {
    titulo: "Código limpio",
    descripcion: "Desarrollo soluciones escalables y organizadas.",
    emoji: "💻",
  },
  {
    titulo: "Creatividad",
    descripcion: "Diseños modernos con buena experiencia de usuario.",
    emoji: "🎨",
  },
  {
    titulo: "Aprendizaje continuo",
    descripcion: "Siempre mejorando mis habilidades.",
    emoji: "📚",
  },
  {
    titulo: "Trabajo en equipo",
    descripcion: "Colaboración efectiva en proyectos.",
    emoji: "🤝",
  },
];

function Informativa() {
  return (
    <div className="container">
      {/* PRESENTACIÓN */}
      <section className="hero">
        <div className="avatar"></div>
        <h1>Juan David Pachon</h1>
        <h2>Desarrollador de Software 🚀</h2>
        <p>
          Apasionado por la tecnología, el desarrollo web y la creación de
          experiencias digitales modernas.
        </p>

        <a
          href="https://github.com/juan-pachon365"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          🔗 Ver GitHub
        </a>
      </section>

      {/* FEATURES */}
      <section className="features">
        {features.map((item, index) => (
          <div className="card" key={index}>
            <div className="emoji">{item.emoji}</div>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>✨ Hecho con React + TypeScript</p>
      </footer>
    </div>
  );
}

export default Informativa;