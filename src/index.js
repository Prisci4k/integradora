import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
const element = <React.StrictMode><App /></React.StrictMode>;

root.render(element);

