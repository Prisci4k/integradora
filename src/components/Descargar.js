import React from 'react';
import './css/Descargar.css';

function Descargar() {
  return (
    <div className="descargar-container">
      <h2 className="descargar-title">Descargar</h2>
      <p className="descargar-text">Haz clic en el botón de abajo para descargar SIRELIAPP.</p>
      <a href="/ruta-del-archivo" className="descargar-button">Descargar SIRELIAPP</a>
    </div>
  );
}

export default Descargar;
