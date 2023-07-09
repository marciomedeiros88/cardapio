import { useNavigate, Link } from 'react-router-dom';
import React from 'react';
import seta from '../../assets/seta.png';
import icone from '../../assets/icone.png'
import './Sanduiches.css'
import {useState} from 'react';

const Petiscos = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState (0); //recebe o parametro inicial do estado


    return(
        <>
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
            <button onClick={() => navigate(-1)}><img className="seta" src={seta}></img> Voltar</button>
            </footer>
        </main>
        </>
    )
}

export default Petiscos