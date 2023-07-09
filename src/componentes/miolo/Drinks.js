import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import './Sanduiches.css'
import '../topo/Topodrinks.css'
import {useState} from 'react';

const Drinks = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState (0); //recebe o parametro inicial do estado

    return(
        <>
        <nav className='bg_drinks'>
            <div><img src={logo}></img></div>
            <h2 className='nome_topo'>Drinks</h2>
        </nav>
        <main>
            
            <ul className='item_list_line'>
                <li><div className='item'><h2 className='text_item'>Item</h2></div></li>
                <li><div className='codigo'><h2>Código</h2></div></li>
                <li><div className='quantidade'><h2>Quantidade</h2></div></li>
                <li><div className='valor'><h2>Valor Total</h2></div></li>
            </ul>
            <ul className='item_list_line'>
                <li><div className='item item_list_bg'><h2 className='text_item text_item_left'>Nome do item</h2></div></li>
                <li><div className='codigo item_list_bg'><h2>Código</h2></div></li>
                <li><div className='contador'>
                    <button className='but_quantidade item_list_bg' onClick={() => {setCounter(counter -1)}}>-</button>
                    <div className='item_list_bg item_quantidade'><h2 className='quantidade_item item_quantidade_largura'>{counter}</h2></div>
                    <button className='but_quantidade item_list_bg' onClick={() => {setCounter(counter +1)}}>+</button></div></li>
                <li><div className='valor item_list_bg'><h2>Valor total</h2></div></li>
            </ul>
            
            <footer>
            <button onClick={() => navigate(-1)}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
            <p>Voltar</p></button>
            </footer>
        </main>
        </>
    )
}

export default Drinks