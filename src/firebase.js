// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  databaseURL: "tu-database-url",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id",
  measurementId: "tu-measurement-id" // Opcional, solo si estás utilizando Google Analytics
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Opcional, solo si estás utilizando Google Analytics
