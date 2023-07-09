import './App.css';
import './componentes/topo/Topo.css'
import './componentes/miolo/Miolostart.css'
import './componentes/animation/animation.css'
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
import Aguas from './componentes/miolo/Aguas';
import Energeticos from './componentes/miolo/Energeticos';
import Destilados from './componentes/miolo/Destilados';
import Sucos from './componentes/miolo/Sucos';
import Sobremesas from './componentes/miolo/Sobremesas';
import Cadastroproduto from './componentes/miolo/Cadastroproduto';
import Login from './componentes/miolo/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { product_mock } from './componentes/services/mockup';

function Rotas() {
    const location = useLocation();
    return (
        <>
        <TransitionGroup>
        <CSSTransition key={location.key} className="transition">
        <Routes location={location}>
            
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
            <Route exact path="/bebidas" element={<Bebidas bebidas={product_mock}/>}/>
            <Route exact path="/cervejas" element={<Cervejas cervejas={product_mock}/>}/>
            <Route exact path="/refris" element={<Refris />}/>
            <Route exact path="/agua" element={<Aguas />}/>
            <Route exact path="/drinks" element={<Drinks />}/>
            <Route exact path="/energeticos" element={<Energeticos />}/>
            <Route exact path="/destilados" element={<Destilados />}/>
            <Route exact path="/sucos" element={<Sucos />}/>
            <Route exact path="/sobremesas" element={<Sobremesas />}/>
            <Route exact path="/cadastroproduto" element={<Cadastroproduto />}/>
            <Route exact path="/login" element={<Login />}/>
        </Routes>
        </CSSTransition>
        </TransitionGroup>
        </>
    );
}

export default Rotas;
