import './Abrirmesa.css'
import icone from '../../assets/icone.png'
import seta from '../../assets/seta.png';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';

const Abrirmesa = () => {
    const navigate = useNavigate();
    return(
        <>
        <main>
            
            <ul>
                <li>
                    <div className='numeromesa'><h2>1</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>2</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>3</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>4</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>5</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className='numeromesa'><h2>6</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>7</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>8</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>9</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>10</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className='numeromesa'><h2>11</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>12</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>13</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>14</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
                <li>
                    <div className='numeromesa'><h2>15</h2></div>
                    <div className='iconemesa'><img src={icone}></img></div>
                </li>
            </ul>
            <footer>
            <button onClick={() => navigate(-1)}><img className="seta" src={seta}></img> Voltar</button>
            </footer>
        </main>
        </>
    )

}

export default Abrirmesa