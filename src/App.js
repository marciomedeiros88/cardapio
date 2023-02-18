import './App.css';
import './componentes/topo/Topo.css'
import './componentes/miolo/Miolostart.css'
import Menu from './componentes/miolo/Menu';
import Miolostart from './componentes/miolo/Miolostart';
import Abrirmesa from './componentes/miolo/Abrirmesa';
import Fecharmesa from './componentes/miolo/Fecharmesa';
import Comidas from './componentes/miolo/Comidas';
import Sanduiches from './componentes/miolo/Sanduiches';
import Combos from './componentes/miolo/Combos';
import Pizzas from './componentes/miolo/Pizzas';
import Salgados from './componentes/miolo/Salgados';
import Hotdogs from './componentes/miolo/Hotdogs';
import Petiscos from './componentes/miolo/Petiscos';
import Bebidas from './componentes/miolo/Bebidas';
import Cervejas from './componentes/miolo/Cervejas';
import Refris from './componentes/miolo/Refris';
import Drinks from './componentes/miolo/Drinks';
import Topo from './componentes/topo/Topo';
import { BrowserRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom';


function App() {

  return (
    <><Topo />
      <Router>
        <Routes>
          <Route exact path='/' element={<Miolostart />}/>
          <Route exact path="/menu" element={<Menu />}/>
          <Route exact path="/abrirmesa" element={<Abrirmesa />}/>
          <Route exact path="/fecharmesa" element={<Fecharmesa />}/>
          <Route exact path="/comidas" element={<Comidas />}/>
          <Route exact path="/sanduiches" element={<Sanduiches />}/>
          <Route exact path="/combos" element={<Combos />}/>
          <Route exact path="/pizzas" element={<Pizzas />}/>
          <Route exact path="/salgados" element={<Salgados />}/>
          <Route exact path="/petiscos" element={<Petiscos />}/>
          <Route exact path="/hotdogs" element={<Hotdogs />}/>
          <Route exact path="/bebidas" element={<Bebidas />}/>
          <Route exact path="/cervejas" element={<Cervejas />}/>
          <Route exact path="/refris" element={<Refris />}/>
          <Route exact path="/drinks" element={<Drinks />}/>
          </Routes>
      </Router>
        
    </>
  );
}

export default App;
