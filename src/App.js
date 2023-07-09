import './App.css';
import './componentes/topo/Topo.css'
import './componentes/miolo/Miolostart.css'
import './componentes/animation/animation.css'
import history from './componentes/services/history';
import Rotas from './Rotas';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { generatePair } from './componentes/services/generate';

function App() {
  
  return (
    <>
      <Router history={history}>
        
          <Rotas />
          
      </Router>
      
    </>
  );
}

export default App;
