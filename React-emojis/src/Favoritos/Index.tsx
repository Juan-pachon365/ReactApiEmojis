import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

function Favoritos() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteEmojis, setFavoriteEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(storedFavorites);

    const fetchFavorites = async () => {
      try {
        const res = await fetch(
          "https://emojihub.yurace.pro/api/all"
        );

        const data: Emoji[] = await res.json();

        const filteredEmojis = data.filter(
          (_, index) =>
            storedFavorites.includes(index.toString())
        );

        setFavoriteEmojis(filteredEmojis);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>

      {favoriteEmojis.length === 0 ? (
        <p>No tienes emojis favoritos</p>
      ) : (
        <div className="emoji-container">
          {favoriteEmojis.map((emoji, index) => (
            <Link
              to={`/emoji/${favorites[index]}`}
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
      )}
    </div>
  );
}

export default Favoritos;