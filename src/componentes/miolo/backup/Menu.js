import './Menu.css'
import React, {Component} from 'react'
import comidas from '../../assets/comidas.jpg';
import bebidas from '../../assets/bebidas.jpg';
import sobremesas from '../../assets/sobremesas.jpg';
import seta from '../../assets/seta.png';
import { useNavigate, Link } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    
    return(
        <>
        <main>
            <section>
            <div><Link to="/comidas" style={{ textDecoration: 'none' }}><img className="crop" src={comidas}></img>
            <h1>Comidas</h1></Link></div>
            <div><Link to="/bebidas" style={{ textDecoration: 'none' }}><img className="crop" src={bebidas}></img>
            <h1>Bebidas</h1></Link></div>
            <div><Link to="/sobremesas" style={{ textDecoration: 'none' }}><img className="crop" src={sobremesas}></img>
            <h1>Sobremesas</h1></Link></div>
            </section>
            <footer>
            <button onClick={() => navigate(-1)}><img className="seta" src={seta}></img> Voltar</button>
            </footer>
        </main>
        
        </>
    )
}

export default Menu