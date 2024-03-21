import React from 'react';
import Header from './components/Header';
import MainSection from './components/Mainsection.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SobreNosotros from './components/SobreNosotros.js';
import Contacto from './components/Contacto.js';
import Descargar from './components/Descargar.js'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCZkSsnoY5D4PXJwJVfWuQDm_ddF-wJh68",
  authDomain: "sireli-7595f.firebaseapp.com",
  databaseURL: "https://sireli-7595f-default-rtdb.firebaseio.com",
  projectId: "sireli-7595f",
  storageBucket: "sireli-7595f.appspot.com",
  messagingSenderId: "980490045809",
  appId: "1:980490045809:web:a39656b92bd03637b34ed0",
  measurementId: "G-J1F7YD2KN5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* MainSection se muestra en todas las páginas */}
        <Routes>
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Descargar" element={<Descargar />} />
        </Routes>
        <MainSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;






