// MainSection.js
import React from 'react';
import './css/Mainsection.css'

function MainSection() {
  return (
    <section className="main-section">
      <div className="section-content">
        <h2 className="section-title">¡Bienvenido a SIRELI!</h2>
        <p className="section-description">Sistema de recompensas en línea de la Universidad Tecnológica Santa Catarina.</p>
        <div className="section-image">
          <img className='img-button' src="images/logosireli.png" alt="SIRELI Logo" />
        </div>
      </div>
      <div className="section-info">
        <h3 className="info-title">¿Cómo Funciona?</h3>
        <p className="info-description">Bienvenido al sistema de recompensas en línea de la Universidad Tecnológica Santa Catarina. Este sistema fue diseñado para motivar y reconocer el esfuerzo y logros de nuestros estudiantes. Los estudiantes pueden acumular puntos a través de diversas actividades académicas y extracurriculares. Estos puntos se traducirán en recompensas tangibles.</p>
      </div>
      <div className="benefits-section">
        <h3 className="benefits-title">Beneficios del Sistema</h3>
        <div className="benefits-list">
          <div className="benefit">
            <h4 className="benefit-title">Colaboración e Interacción</h4>
            <p className="benefit-description">Al incentivar la participación en actividades fuera del aula, como proyectos de grupo o eventos sociales, el sistema de recompensas puede fomentar la colaboración entre estudiantes y promover una mayor interacción.</p>
          </div>
          <div className="benefit">
            <h4 className="benefit-title">Promueve el Compromiso</h4>
            <p className="benefit-description">Al ganar puntos por participar en actividades académicas, deportivas, culturales u otras, los estudiantes se sienten más comprometidos con la vida universitaria y están más dispuestos a participar en una variedad de actividades.</p>
          </div>
          <div className="benefit">
            <h4 className="benefit-title">Genera Datos Útiles</h4>
            <p className="benefit-description">Al recopilar información sobre la participación y la asistencia de los estudiantes, la universidad puede analizar estos datos para identificar tendencias, evaluar la efectividad de programas o actividades específicas, y tomar decisiones informadas para mejorar la experiencia estudiantil.</p>
          </div>
        </div>
      </div>
      <div className="follow-section">
        <h3 className="follow-title">Síguenos en nuestras redes</h3>
        <p className="follow-info">¡Sigue a SIRELI en las redes sociales para mantenerte al tanto de nuestras últimas noticias y actualizaciones!</p>
        <div className="social-links">
          <a href="#" className="social-link">#SIRELI</a>
        </div>
      </div>
      <div className="objectives-section">
        <h3 className="objectives-title">Nuestros Objetivos</h3>
        <ul className="objectives-list">
          <li className="objective">Fomentar la asistencia a clases</li>
          <li className="objective">Reconocer y premiar el esfuerzo y el compromiso</li>
          <li className="objective">Estimular la participación en actividades extracurriculares</li>
          <li className="objective">Facilitar la monitorización y el seguimiento de la asistencia</li>
          <li className="objective">Crear un sentido de pertenencia y comunidad</li>
        </ul>
      </div>
    </section>
  );
}

export default MainSection;
