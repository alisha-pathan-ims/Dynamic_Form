import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";  // Or any other theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <PrimeReactProvider >
    <App />
  </PrimeReactProvider>

  // </StrictMode>,
)
