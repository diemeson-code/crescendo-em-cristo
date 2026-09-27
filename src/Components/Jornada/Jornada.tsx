import "./Jornada.css";

// Dados que o componente vai usar
const temas = ["Palavra de Deus", "Oração", "Fé", "Santidade"];

// Componente Jornada
function Jornada() {
  return (
    <section id="jornada" className="jornada">
      <h2>Minha Jornada</h2>

      <p>Cresça diariamente na sua caminhada com Cristo.</p>

      <div className="cards">
        {temas.map((tema) => (
          <div className="card" key={tema}>
            <h3>{tema}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Jornada;
