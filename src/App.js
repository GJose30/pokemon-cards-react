import React from 'react';
import './App.css';

// App component
const App = () => {
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
        {/ Add more CardLogo components as needed */}
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
};

export default App;
