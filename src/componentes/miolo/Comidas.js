import './Comidas.css'
import React from 'react'
import sanduiches from '../../assets/burger.jpg';
import pizzas from '../../assets/pizza.jpg';
import salgados from '../../assets/coxinha.jpg';
import combos from '../../assets/combos.jpg';
import hotdogs from '../../assets/hotdog.jpg';
import petiscos from '../../assets/petisco.jpg';
import seta from '../../assets/seta.png';
import { useNavigate, Link } from 'react-router-dom';

const Comidas = () => {
    const navigate = useNavigate();
    
    return(
        <>
        <main>
            <section className="menu_comidas">
            <div className='item_menor'><Link to="/sanduiches" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={sanduiches}></img>
            <h1>Sanduíches</h1></Link></div>
            <div className='item_menor'><Link to="/pizzas" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={pizzas}></img>
            <h1>Pizzas</h1></Link></div>
            <div className='item_menor'><Link to="/salgados" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={salgados}></img>
            <h1>Salgados</h1></Link></div>
            <div className='item_menor'><Link to="/combos" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={combos}></img>
            <h1>Combos</h1></Link></div>
            <div className='item_menor'><Link to="/hotdogs" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={hotdogs}></img>
            <h1>Hot Dogs</h1></Link></div>
            <div className='item_menor'><Link to="/petiscos" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={petiscos}></img>
            <h1>Petiscos</h1></Link></div>
            </section>
            <footer>
            <button onClick={() => navigate(-1)}><img className="seta" src={seta}></img> Voltar</button>
            </footer>
        </main>
        
        </>
    )
}

export default Comidas