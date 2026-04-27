import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

function Home() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("all");

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const res = await fetch("https://emojihub.yurace.pro/api/all");
        const data = await res.json();
        setEmojis(data);
      } catch (error) {
        console.error("Error cargando emojis:", error);
      }
    };

    fetchEmojis();
  }, []);

  const categoriasUnicas = [
    "all",
    ...new Set(emojis.map((emoji) => emoji.category)),
  ];

  const emojisFiltrados = emojis.filter((emoji) => {
    const coincideBusqueda = emoji.name
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "all" || emoji.category === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="home-container">
      <h1>Lista de Emojis</h1>

      <input
        type="text"
        placeholder="Buscar emoji..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="filtros">
        {categoriasUnicas.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="emoji-container">
        {emojisFiltrados.map((emoji, index) => (
          <Link
            to={`/emoji/${index}`}
            key={index}
            className="emoji-card"
          >
            <h2
              dangerouslySetInnerHTML={{
                __html: emoji.htmlCode[0],
              }}
            ></h2>

            <p>{emoji.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;