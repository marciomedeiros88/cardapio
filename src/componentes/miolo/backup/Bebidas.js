import './Bebidas.css'
import React from 'react'
import agua from '../../assets/agua.jpg';
import cervejas from '../../assets/beer.jpg';
import refris from '../../assets/refri.jpg';
import drinks from '../../assets/drink.jpg';
import energeticos from '../../assets/energy.jpg';
import destilados from '../../assets/whisky.jpg';
import sucos from '../../assets/sucos.jpg';
import seta from '../../assets/seta.png';
import { useNavigate, Link } from 'react-router-dom';

const Bebidas = () => {
    const navigate = useNavigate();
    
    return(
        <>
        <main>
            <section className="menu_comidas">
            <div className='item_menor'><Link to="/cervejas" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={cervejas}></img>
            <h1>Cervejas</h1></Link></div>
            <div className='item_menor'><Link to="/refris" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={refris}></img>
            <h1>Refris</h1></Link></div>
            <div className='item_menor'><Link to="/drinks" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={drinks}></img>
            <h1>Drinks</h1></Link></div>
            <div className='item_menor'><Link to="/agua" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={agua}></img>
            <h1>Água</h1></Link></div>
            <div className='item_menor'><Link to="/energeticos" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={energeticos}></img>
            <h1>Energéticos</h1></Link></div>
            <div className='item_menor'><Link to="/destilados" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={destilados}></img>
            <h1>Destilados</h1></Link></div>
            <div className='item_menor'><Link to="/sucos" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={sucos}></img>
            <h1>Sucos</h1></Link></div>
            </section>
            <footer>
            <button onClick={() => navigate(-1)}><img className="seta" src={seta}></img> Voltar</button>
            </footer>
        </main>
        
        </>
    )
}

export default Bebidas