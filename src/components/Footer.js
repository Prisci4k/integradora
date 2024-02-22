import React from 'react';
import './css/Footer.css'; // Importa tu archivo de estilos para el footer aquí

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5 className="footer-heading">Sireli</h5>
          {/* Agrega cualquier contenido adicional para esta sección */}
        </div>
        <div className="footer-section">
          {/* Agrega contenido adicional para esta sección si es necesario */}
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">UTSC</h5>
          {/* Agrega cualquier contenido adicional para esta sección */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
