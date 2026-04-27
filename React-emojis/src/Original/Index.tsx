import "./style.css";
import { useState } from "react";

function Original() {
  const situaciones = [
    {
      pregunta: "Tu amigo perdió un examen",
      opciones: ["😢", "😂", "😎", "😡"]
    },
    {
      pregunta: "¿Cómo le responderías a tu crush si te escribe?",
      opciones: ["😍", "😳", "❤️", "😂"]
    },
    {
      pregunta: "¿Cómo le responderías a tu papá si se entera que te escapaste?",
      opciones: ["😔", "😶", "😥", "😦"]
    },
    {
      pregunta: "Tu amigo no ha hecho su parte del código",
      opciones: ["😑", "🫩", "🤬", "🤨"]
    }
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);

  const actual = situaciones[preguntaActual];

  const seleccionarEmoji = (emoji: string) => {
    const nuevasRespuestas = [...respuestas, emoji];
    setRespuestas(nuevasRespuestas);

    if (preguntaActual < situaciones.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setPreguntaActual(situaciones.length);
    }
  };

  const mensajeFinal = () => {
    if (respuestas.includes("🤬") || respuestas.includes("😡")) {
      return "Eres una persona que se enoja facil controlate un poco bro🤯";
    }

    if (respuestas.includes("❤️") || respuestas.includes("😍")) {
      return "Tienes mucho amor en tu corazon, vas por el camino correcto🫰";
    }

    if (respuestas.includes("😢") || respuestas.includes("😔")) {
      return "no te proyectes bro, si estas triste dilo🥺";
    }

    return "No logre determinar tu personalidad, yo que tu lo volveria a intentr";
  };

  if (preguntaActual === situaciones.length) {
    return (
      <div className="resultado-final">
        <h1>Resultados Finales</h1>

        {situaciones.map((situacion, index) => (
          <div key={index}>
            <h3>{situacion.pregunta}</h3>
            <p>Tu respuesta: {respuestas[index]}</p>
          </div>
        ))}

        <h2>{mensajeFinal()}</h2>
      </div>
    );
  }

  return (
    <>
      <h1>{actual.pregunta}</h1>

      <div className="emoji-opciones">
        {actual.opciones.map((emoji, index) => (
          <button
            key={index}
            onClick={() => seleccionarEmoji(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </>
  );
}

export default Original;