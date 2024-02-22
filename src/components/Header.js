import React from 'react';
import './css/Header.css';

function Header() {
  return (
    <header className="u-clearfix u-header u-header" id="sec-b4c8">
      <div className="u-clearfix u-sheet u-sheet-1">
        <a href="/" className="u-image u-logo u-image-1" data-image-width="589" data-image-height="471">
          <img src="images/logosireli.png" className="u-logo-image u-logo-image-1" alt="Logo de Sireli" />
        </a>
        <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1" data-responsive-from="MD">
          {/* Contenido del menú desplegable */}
        </nav>
      </div>
    </header>
  );
}

export default Header;



