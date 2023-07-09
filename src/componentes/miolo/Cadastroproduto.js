import React from 'react'
import './Cadastroproduto.css'
import ReceberCSV from '../services/recebercsv'

function Cadastroproduto() {
  return (
    <main className='maincadastro'>

    <div>
        <h2 className='titulocadastroproduto'>
        Cadastre seus produtos
        </h2>
    </div>
    <div>
        <form className='formcadastroproduto'>
            <label className='labelinputfile'>Insira o CSV com os produtos para cadastro</label>
            <input type="file" className='inputfile' id="arquivo"/>
            <button onClick={ReceberCSV}>Enviar dados</button>
        </form>
    </div>
    </main>
  )
}

export default Cadastroproduto
