import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import './Cervejas.css'
import '../topo/Topocervejas.css'
import {useState} from 'react';
import Lista from './Lista';

const Cervejas = ({cervejas}) => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState (0); //recebe o parametro inicial do estado
    console.log(cervejas)

    return(
        <>
        <nav className='bg_cervejas'>
            <div><img src={logo} alt='Logo do sistema'></img></div>
            <h2 className='nome_topo'>Cervejas</h2>
        </nav>
        <main>
        <ul className='item_list_line'>
                <li><div className='item'><h2 className='text_item'>Item</h2></div></li>
                <li><div className='codigo'><h2>Código</h2></div></li>
                <li><div className='quantidade'><h2>Quantidade</h2></div></li>
                <li><div className='valor'><h2>Valor Total</h2></div></li>
        </ul>
        <section className='lista_itens'>
            {cervejas.map((cerveja) => {
                console.log(cerveja);
                return(
                <div className='linha_produto'>
                    <Lista key={cerveja.id} data={cerveja}/>
                </div>
                )
            })}
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

export default Cervejas