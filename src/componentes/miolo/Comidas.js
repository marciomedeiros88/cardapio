import './Comidas.css'
import '../topo/Topocomidas.css'
import React from 'react'
import sanduiches from '../../assets/burger.jpg';
import pizzas from '../../assets/pizza.jpg';
import salgados from '../../assets/coxinha.jpg';
import combos from '../../assets/combos.jpg';
import hotdogs from '../../assets/hotdog.jpg';
import petiscos from '../../assets/petisco.jpg';
import seta from '../../assets/seta.png';
import logo from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

const Comidas = () => {
    const navigate = useNavigate();
    
    return(
        <>
        <nav className='bg_comidas'>
            <div><img src={logo}></img></div>
            <h2 className='nome_topo'>Comidas</h2>
        </nav>
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
            <button onClick={() => navigate(-1)}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
            <p>Voltar</p></button>
            </footer>
        </main>
        
        </>
    )
}

export default Comidas