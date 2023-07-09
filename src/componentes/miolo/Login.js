import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
    <section className='sectionlogin'>
        <div className='boxlogin'>
            <div className='imglogin'>
                <img src='https://www.marciomedeirosdesign.com.br/nucleoweb/cardapio/imgs/icon.png' alt='Ícone login'/>
            </div>
    <div>
        <h3 className='titulologin'>
        Insira seus dados para entrar na sua conta
        </h3>
    </div>
    <div>
        <form className='formlogin'>
            <label className='labelemail'>Email</label>
            <input type="email" className='inputemail' placeholder='Digite seu e-mail' required/>
            <label className='labelsenha'>Senha</label>
            <input type='password' className='inputpassword' placeholder='Digite sua senha' required/>
            <button className='butlogin'>Entrar</button>
        </form>
    </div>
    </div>
    </section>
    </>
  )
}

export default Login
