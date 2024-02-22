import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import ReactDOM from 'react-dom';


createRoot(document.getElementById('root')).render(<App />);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

