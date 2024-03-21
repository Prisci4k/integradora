import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import './css/Descargar.css';

function Descargar() {
  const [descargas, setDescargas] = useState(0);

  // Configura tu proyecto de Firebase
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

  // Inicializa Firebase si no está inicializado ya
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    // Obtén una referencia a la ubicación "Descargas" en la base de datos
    const descargasRef = firebase.database().ref('Descargas');

    // Escucha cambios en el valor de "Descargas" en tiempo real
    descargasRef.on('value', (snapshot) => {
      // Actualiza el estado local con el valor de descargas
      const descargasData = snapshot.val();
      setDescargas(descargasData || 0);
    });

    // Devuelve una función para limpiar el listener cuando el componente se desmonta
    return () => descargasRef.off('value');
  }, []);

  // Función para registrar una descarga en la base de datos de Firebase
  const registrarDescarga = () => {
    // Obtén una referencia a la ubicación "Descargas" en la base de datos
    const descargasRef = firebase.database().ref('Descargas');

    // Incrementa el contador de descargas
    descargasRef.transaction(currentDescargas => {
      return (currentDescargas || 0) + 1;
    }).catch(error => {
      console.error('Error registrando la descarga:', error);
    });
  };

  // Función para manejar la descarga del APK
  const handleDescargarClick = () => {
    // Crea un enlace temporal para descargar el APK
    const link = document.createElement('a');
    link.href = 'https://firebaseappdistribution.googleapis.com/app-binary-downloads/projects/980490045809/apps/1:980490045809:android:dfbb24fcba2b932db34ed0/releases/0upp1ljdt7o1o/binaries/cd6938340332b70e63880ca362eb1ea541e50ca399846520bb26d3921f980d07/app.apk?utm_source=firebase-console&token=AFb1MRwAAAAAZfxgWJQDYLOVpPzhJH-IpKMDbMoGgT9fY4zbW4Y_ylafRU44aLsowMRsIRSwnmV_hoge4TpDIDJYHLs-UfHtKpbKh-3gQBUMXidS8bw3nm9C9g8tYsHtuDcyCE2iaf1Llkht7NF85x2Oo7QeMh2_X3znt4-2Xu8ksc1IGpEU80X2E-MGewmH3CIq7JLB1oYXfcgkgUKJAet_gu1PPSBqOiqLxI5HILyUycC7YfzuQJz9swciKfv6cIkQlcEWjVNl_O2k4cdKXTkThzc5CnKZ6tBGALoGmy3_eHaB6g2BFeISeRPX3BCYdhHoqe1hsoAYKOeqYKrRyVDLV4thZcB11L_w3Zo';
    link.download = 'app.apk'; // Puedes especificar el nombre del archivo aquí
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    registrarDescarga(); // Registra la descarga después de que se haya iniciado la descarga
  };

  return (
    <div className="descargar-container">
      <h2 className="descargar-title">Descargar</h2>
      <p className="descargar-text">Haz clic en el botón de abajo para descargar SIRELIAPP.</p>
      <button className="descargar-button" onClick={handleDescargarClick}>Descargar SIRELIAPP</button>
      <p>Total de descargas: {descargas}</p>
    </div>
  );
}

export default Descargar;
