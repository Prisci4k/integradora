import React from 'react';
import Header from './components/Header';
import MainSection from './components/Mainsection.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambiado a Routes y Route
import SobreNosotros from './components/SobreNosotros.js';
import Contacto from './components/Contacto.js';
import Descargar from './components/Descargar.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Cambiado de Switch a Routes */}
          <Route path="/SobreNosotros" element={<SobreNosotros />} /> {/* Cambiado a elemento en lugar de componente */}
          <Route path="/Contacto" element={<Contacto />} /> {/* Cambiado a elemento en lugar de componente */}
          <Route path="/Mainsection" element={<MainSection />} /> {/* Cambiado a elemento en lugar de componente */}
          <Route path="/Descargar" element={<Descargar />} /> {/* Cambiado a elemento en lugar de componente */}
        </Routes>
        <MainSection>

        </MainSection>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


