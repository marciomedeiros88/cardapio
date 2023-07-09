import './Miolostart.css'
import novopedido from '../../assets/novo-pedido.jpg';
import abrirmesa from '../../assets/abrir-mesa.jpg';
import fecharmesa from '../../assets/fechar-mesa.jpg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import '../topo/Topomiolostart.css'

const Miolostart = () => {
    return(
        <>
        <nav className='bg_miolostart'>
            <div><img src={logo}></img></div>
            <h2 className='nome_topo'>Início</h2>
        </nav>
        <main>
            <section>
            
            <div className='back_color'><Link to="/menu" style={{ textDecoration: 'none' }}>
                <img className="crop" src={novopedido}></img>
            <h1>Novo pedido</h1></Link></div>
            <div className='back_color'><Link to="/abrirmesa" style={{ textDecoration: 'none' }}>
                <img className="crop" src={abrirmesa}></img>
            <h1>Abrir mesa</h1></Link></div>
            <div className='back_color'><Link to="/fecharmesa" style={{ textDecoration: 'none' }}>
                <img className="crop" src={fecharmesa}></img>
            <h1>Fechar mesa</h1></Link></div>
            </section>
        </main>
        
        </>
    )
}

export default Miolostart