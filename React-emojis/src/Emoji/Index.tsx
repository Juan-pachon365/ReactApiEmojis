import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

function Emoji() {
  const { id } = useParams<{ id: string }>();

  const [emoji, setEmoji] = useState<Emoji | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchEmoji = async () => {
      try {
        const res = await fetch("https://emojihub.yurace.pro/api/all");
        const data: Emoji[] = await res.json();

        const selectedEmoji = data[Number(id)];

        if (selectedEmoji) {
          setEmoji(selectedEmoji);
        }

        const favorites = JSON.parse(
          localStorage.getItem("favorites") || "[]"
        );

        if (favorites.includes(id)) {
          setIsFavorite(true);
        }
      } catch (error) {
        console.error("Error cargando emoji:", error);
      }
    };

    fetchEmoji();
  }, [id]);

  const toggleFavorite = () => {
    if (!id) return;

    let favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (favorites.includes(id)) {
      favorites = favorites.filter(
        (fav: string) => fav !== id
      );
      setIsFavorite(false);
    } else {
      favorites.push(id);
      setIsFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  };

  if (!emoji) return <p>Cargando...</p>;

  return (
    <div>
      <h1
        dangerouslySetInnerHTML={{
          __html: emoji.htmlCode[0],
        }}
      ></h1>

      <h2>
        {emoji.name}
        <button onClick={toggleFavorite}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </h2>

      <h3>Información</h3>

      <p>
        <strong>Nombre:</strong> {emoji.name}
      </p>

      <p>
        <strong>Categoría:</strong> {emoji.category}
      </p>

      <p>
        <strong>Grupo:</strong> {emoji.group}
      </p>

      <p>
        <strong>Unicode:</strong>{" "}
        {emoji.unicode.join(", ")}
      </p>

      <p>
        <strong>HTML Code:</strong>{" "}
        {emoji.htmlCode.join(", ")}
      </p>
    </div>
  );
}

export default Emoji;