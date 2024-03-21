import React from 'react';
import './css/Contacto.css';

function Contacto() {
  return (
    <div className="contacto-container">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-text">¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti! Puedes ponerte en contacto con nosotros de las siguientes maneras:</p>
      <ul className="contacto-list">
        <li className="contacto-item">Envíanos un correo electrónico a: <a href="mailto:info@sireli.com" className="contacto-link">Sireliapp@hotmail.com</a></li>
        <li className="contacto-item">Llámanos al: <a href="tel:+1234567890" className="contacto-link">+52 81 3154 9469 </a></li>
        <li className="contacto-item">Visítanos en nuestras oficinas ubicadas en: <span className="contacto-direccion">Carr. Monterrey - Saltillo Km. 61.5, Bosques de Santa Catarina, 66359 Cdad. Santa Catarina, N.L.</span></li>
      </ul>
    </div>
  );
}

export default Contacto;
