import "./ChatBot.css";
import { useState } from "react";
import { Send, Bot, X } from "lucide-react";

type Mensaje = { autor: "bot" | "user"; texto: string };

const respuestasRapidas = [
  "¿Tienen repuestos para Caterpillar?",
  "¿Cuál es el tiempo de entrega?",
  "Quiero hablar con un asesor",
];

const respuestasPredeterminadas: Record<string, string> = {
  "¿Tienen repuestos para Caterpillar?":
    "Sí, contamos con stock de repuestos originales y alternativos para Caterpillar. ¿Qué componente necesitas?",
  "¿Cuál es el tiempo de entrega?":
    "El despacho a nivel nacional toma entre 24 y 48 horas dependiendo de tu ubicación.",
  "Quiero hablar con un asesor":
    "Perfecto, puedes escribirnos por WhatsApp o dejar tu número y un asesor te contactará.",
};

export default function ChatBot({ onClose }: { onClose: () => void }) {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { autor: "bot", texto: "¡Hola! 👋 Soy el asistente virtual de HDM Maquinarias. ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");

  const enviar = (texto: string) => {
    if (!texto.trim()) return;
    const respuesta =
      respuestasPredeterminadas[texto] ||
      "Gracias por tu mensaje. Un asesor te responderá a la brevedad. Mientras tanto, puedes escribirnos por WhatsApp.";

    setMensajes((prev) => [
      ...prev,
      { autor: "user", texto },
      { autor: "bot", texto: respuesta },
    ]);
    setInput("");
  };

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <div className="chatbot-header-info">
          <Bot size={20} />
          <div>
            <strong>Asistente HDM</strong>
            <span>En línea</span>
          </div>
        </div>
        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="chatbot-body">
        {mensajes.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.autor}`}>
            {m.texto}
          </div>
        ))}

        <div className="chatbot-quick">
          {respuestasRapidas.map((r) => (
            <button key={r} onClick={() => enviar(r)}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <form
        className="chatbot-input"
        onSubmit={(e) => {
          e.preventDefault();
          enviar(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button type="submit">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
