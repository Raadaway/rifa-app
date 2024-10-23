import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RoutesComponent from './Routes'; // Importa el componente de rutas
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesComponent /> {/* Renderiza el componente de rutas */}
  </StrictMode>,
);
