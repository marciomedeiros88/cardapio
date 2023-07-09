import './Bebidas.css'
import '../topo/Topobebidas.css'
import React from 'react'
import agua from '../../assets/agua.jpg';
import cervejas from '../../assets/beer.jpg';
import refris from '../../assets/refri.jpg';
import drinks from '../../assets/drink.jpg';
import energeticos from '../../assets/energy.jpg';
import destilados from '../../assets/whisky.jpg';
import sucos from '../../assets/sucos.jpg';
import logo from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

const Bebidas = (bebidas) => {
    const navigate = useNavigate();
    
    return(
        <>
        <nav className='bg_bebidas'>
            <div><img src={logo} alt='Logo sistema'></img></div>
            <h2 className='nome_topo'>Bebidas</h2>
        </nav>
        <main>
            <section className="menu_bebidas">
            <div className='item_menor'><Link to="/cervejas" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={cervejas} alt='Cervejas'></img>
            <h1>Cervejas</h1></Link></div>
            <div className='item_menor'><Link to="/refris" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={refris} alt='Refris'></img>
            <h1>Refris</h1></Link></div>
            <div className='item_menor'><Link to="/drinks" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={drinks} alt='Drinks'></img>
            <h1>Drinks</h1></Link></div>
            <div className='item_menor'><Link to="/agua" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={agua} alt='Águas'></img>
            <h1>Água</h1></Link></div>
            <div className='item_menor'><Link to="/energeticos" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={energeticos} alt='Energéticos'></img>
            <h1>Energéticos</h1></Link></div>
            <div className='item_menor'><Link to="/destilados" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={destilados} alt='Destilados'></img>
            <h1>Destilados</h1></Link></div>
            <div className='item_menor'><Link to="/sucos" style={{ textDecoration: 'none' }}>
                <img className="crop_min img_menor" src={sucos} alt='Sucos'></img>
            <h1>Sucos</h1></Link></div>
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

export default Bebidas