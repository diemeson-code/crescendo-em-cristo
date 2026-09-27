import "./Hero.css";

function Hero() {
  return (
    <main id="inicio" className="hero">
      <div className="hero-content">
        <h1>Minha jornada com Cristo</h1>

        <p>
          Todos os dias podemos crescer no conhecimento da Palavra de Deus.
        </p>

        <button onClick={() => {
  document.getElementById("jornada")?.scrollIntoView({
    behavior: "smooth",
  });
}}>
  Começar minha jornada
</button>
      </div>
    </main>
  );
}

export default Hero;
