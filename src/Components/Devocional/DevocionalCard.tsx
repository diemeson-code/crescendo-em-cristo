import { useState } from "react";

type DevocionalCardProps = {
  icone: string;
  titulo: string;
  texto: string;
};

function DevocionalCard({ icone, titulo, texto }: DevocionalCardProps) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="devocional-card">
      <span className="icone">{icone}</span>

      <h3>{titulo}</h3>

      {mostrar && <p>{texto}</p>}

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Ler reflexão"}
      </button>
    </div>
  );
}

export default DevocionalCard;
