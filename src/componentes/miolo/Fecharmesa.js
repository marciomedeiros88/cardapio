import novopedido from '../../assets/novo-pedido.jpg';
import abrirmesa from '../../assets/abrir-mesa.jpg';
import fecharmesa from '../../assets/fechar-mesa.jpg';
import { useNavigate, Link } from 'react-router-dom';

const Fecharmesa = () => {
    const navigate = useNavigate();
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
            <footer>
            <button onClick={() => navigate(-1)}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
            <p>Voltar</p></button>
            </footer>
        </main>
        
        </>
    )
}

export default Fecharmesa