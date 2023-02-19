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
import Sucos from './componentes/miolo/Sucos';
import Sobremesas from './componentes/miolo/Sobremesas';
import Destilados from './componentes/miolo/Destilados';
import Aguas from './componentes/miolo/Aguas';
import Energeticos from './componentes/miolo/Energeticos';
import Topo from './componentes/topo/Topo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
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
          <Route exact path="/sobremesas" element={<Sobremesas />}/>
          <Route exact path="/sucos" element={<Sucos />}/>
          <Route exact path="/aguas" element={<Aguas />}/>
          <Route exact path="/destilados" element={<Destilados />}/>
          <Route exact path="/energeticos" element={<Energeticos />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
