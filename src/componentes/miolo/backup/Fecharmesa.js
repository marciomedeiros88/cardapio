import novopedido from '../../assets/novo-pedido.jpg';
import abrirmesa from '../../assets/abrir-mesa.jpg';
import fecharmesa from '../../assets/fechar-mesa.jpg';
import { BrowserRouter, Link } from 'react-router-dom';

const Fecharmesa = () => {
    return(
        <>

        <main>
            <section>
            
            <div><Link to="/pagina1" style={{ textDecoration: 'none' }}>
                <img className="crop" src={novopedido}></img>
            <h1>Novo pedido</h1></Link></div>
            <div><Link to="/pagina2" style={{ textDecoration: 'none' }}>
                <img className="crop" src={abrirmesa}></img>
            <h1>Abrir mesa</h1></Link></div>
            <div><Link to="/pagina3" style={{ textDecoration: 'none' }}>
                <img className="crop" src={fecharmesa}></img>
            <h1>Fechar mesa</h1></Link></div>
            
            </section>
        </main>
        
        </>
    )
}

export default Fecharmesa