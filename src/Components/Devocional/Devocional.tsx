import "./Devocional.css";
import DevocionalCard from "./DevocionalCard";

const itens = [
  {
    icone: "📖",
    titulo: "Palavra",
    texto: "Medite na Palavra de Deus.",
  },
  {
    icone: "❤️",
    titulo: "Amor",
    texto: "Viva o amor de Cristo.",
  },
  {
    icone: "🙏",
    titulo: "Oração",
    texto: "Separe um momento para conversar com Deus.",
  },
  {
    icone: "🌱",
    titulo: "Reflexão",
    texto: "Busque crescer diariamente na fé.",
  },
];

function Devocional() {
  return (
    <section id="devocional" className="devocional">
      <h2>Devocional do Dia</h2>

      <p>Reserve alguns minutos do seu dia para meditar na Palavra de Deus.</p>

      <div className="devocional-cards">
        {itens.map((item) => (
          <DevocionalCard
            key={item.titulo}
            icone={item.icone}
            titulo={item.titulo}
            texto={item.texto}
          />
        ))}
      </div>
    </section>
  );
}

export default Devocional;
