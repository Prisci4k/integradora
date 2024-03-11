import React from 'react';
import Header from './components/Header';
import MainSection from './components/Mainsection.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SobreNosotros from './components/SobreNosotros.js';
import Contacto from './components/Contacto.js';
import Descargar from './components/Descargar.js';
import firebase from 'firebase/compat/app'; // Importa el módulo de Firebase
import 'firebase/compat/auth'; // Importa los módulos adicionales que necesites

// Configura tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZkSsnoY5D4PXJwJVfWuQDm_ddF-wJh68",
  authDomain: "sireli-7595f.firebaseapp.com",
  databaseURL: "https://sireli-7595f-default-rtdb.firebaseio.com",
  projectId: "sireli-7595f",
  storageBucket: "sireli-7595f.appspot.com",
  messagingSenderId: "980490045809",
  appId: "1:980490045809:web:e68e711d5ec00014b34ed0",
  measurementId: "G-P4MNLG7SHM"
};

// Inicializa tu aplicación Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Mainsection" element={<MainSection />} />
          <Route path="/Descargar" element={<Descargar />} />
        </Routes>
        <MainSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;



