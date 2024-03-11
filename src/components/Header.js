import React, { useState } from 'react';
import './css/Header.css'; // Importa el archivo de estilos CSS para el header

function Header() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <header className={visible ? 'header' : 'header hidden'}>
      <div className="logo-container">
        <a href="/" className="logo-link" onClick={toggleVisibility}> {/* Agrega onClick al enlace del logo */}
          <img src="images/logosireli.png" alt="Logo" className="logo" />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
          <li className="nav-item"><a href="/SobreNosotros" className="nav-link">Sobre nosotros</a></li>
          <li className="nav-item"><a href="/Contacto" className="nav-link">Contacto</a></li>
          <li className="nav-item"><a href="/Descargar" className="nav-link">Descargar</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


