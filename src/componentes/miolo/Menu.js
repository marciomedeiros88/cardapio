import './Menu.css'
import '../topo/Topomenu.css'
import React, {Component} from 'react'
import comidas from '../../assets/comidas.jpg';
import bebidas from '../../assets/bebidas.jpg';
import sobremesas from '../../assets/sobremesas.jpg';
import logo from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    
    return(
        <>
        <nav className='bg_menu'>
            <div><img src={logo}></img></div>
            <h2 className='nome_topo'>Menu</h2>
        </nav>
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
            <button onClick={() => navigate(-1)}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
            <p>Voltar</p></button>
            </footer>
        </main>
        
        </>
    )
}

export default Menu