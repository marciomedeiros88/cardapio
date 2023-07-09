import './Lista.css'
import {useState} from 'react';

function Lista({data}){
    const [counter, setCounter] = useState (1); //recebe o parametro inicial do estado
    const valortotal = counter * data.valor

    console.log(data)
return(
    <>  
        <ul className='cadaitem'>
                <li><div className='imagem_produto'><img src={data.imagem} alt={data.nome}/></div></li>
                <li><div className='nomeitem'><h2 className='text_item_lista text_item_left'>{data.nome}</h2></div></li>
                <li><div className='codigoitem'><h2>{data.codigo}</h2></div></li>
                <li><div className='contador'>
                    <button className='but_quantidade item_list_bg' onClick={() => {setCounter(counter -1)}}>-</button>
                    <div className='item_list_bg item_quantidade'><h2 className='quantidade_item item_quantidade_largura'>{counter}</h2></div>
                    <button className='but_quantidade item_list_bg' onClick={() => {setCounter(counter +1)}}>+</button></div></li>
                <li><div className='valor_item'><h2>R${valortotal},00</h2></div></li>
            </ul>
        
    </>
)
}

export default Lista