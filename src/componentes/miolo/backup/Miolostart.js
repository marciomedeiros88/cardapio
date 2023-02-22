import './Miolostart.css'
import novopedido from '../../assets/novo-pedido.jpg';
import abrirmesa from '../../assets/abrir-mesa.jpg';
import fecharmesa from '../../assets/fechar-mesa.jpg';
import Menu from './Menu';
import Abrirmesa from './Abrirmesa';
import { BrowserRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom';
import React from 'react';

const Miolostart = () => {
    return(
        <>
        
        <main>
            <section>
            
            <div><Link to="/menu" style={{ textDecoration: 'none' }}>
                <img className="crop" src={novopedido}></img>
            <h1>Novo pedido</h1></Link></div>
            <div><Link to="/abrirmesa" style={{ textDecoration: 'none' }}>
                <img className="crop" src={abrirmesa}></img>
            <h1>Abrir mesa</h1></Link></div>
            <div><Link to="/fecharmesa" style={{ textDecoration: 'none' }}>
                <img className="crop" src={fecharmesa}></img>
            <h1>Fechar mesa</h1></Link></div>
        
            
            </section>
        </main>
        
        </>
    )
}

export default Miolostart