import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";

// Navbar component

// App component
function App() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.pokemontcg.io/v2/cards");
        if (response.ok) {
          const data = await response.json();
          setPokemonData(data);
        } else {
          console.error("Error al obtener los datos");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>API de Pokémon</h1>
      {pokemonData && (
        <div>
          {pokemonData.data.map((pokemon) => (
            <div key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.images.small} alt={pokemon.name} />
              <img src={pokemon.images.large} alt={pokemon.name} />
              <img
                class="w-28 h-20"
                src={pokemon.set.images.logo}
                alt={pokemon.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// App component
/*const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <CollectionSection title="SCARLET & VIOLET" />
      <CollectionSection title="SWORD & SHIELD" />
    </div>
  );
};

// Navbar component
const Navbar = () => {
  return (
    <header class="flex justify-between items-center py-5 xl:w-[1120px] mx-auto">
      <span></span>
      <nav class="flex flex-row gap-x-10 opacity-80">
        <a href="#top">Inicio</a>
        <a href="#about">Acerca de mi</a>
        <a href="#experience">Experiencia</a>
        <a href="#project">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>

  );
};

// CollectionSection component
const CollectionSection = ({ title }) => {
  return (
    <section className="collection-section">
      <h2>{title}</h2>
      <div className="card-collection">
        {/* Placeholder for card logos /}
        <CardLogo title="PALDEAN FATES" code="MW/DD" percentage="45%" />
        {/ Add more CardLogo components as needed * /}
      </div>
    </section>
  );
};

// CardLogo component
const CardLogo = ({ title, code, percentage }) => {
  return (
    <div className="card-logo">
      <h3>{title}</h3>
      <p>{code}</p>
      <p>{percentage}</p>
    </div>
    
  );
};*/

export default App;
