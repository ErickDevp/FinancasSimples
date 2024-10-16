import { FaBtc, FaBuilding, FaChartLine, FaDollarSign } from 'react-icons/fa';
import {Link} from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import imgUser from '../../assets/images/img.jpg'
import '../../assets/styles/Sidebar.css'


export default function Sidebar() {
    const {logout} = useLogout();

    return (
        <div className='sidebar'>
            <nav >
                <div className="infos_user">
                    <img src={imgUser} alt="foto usuario" />
                    Erick santana
                </div>
                <div className="wallets">
                    <div className="container_wallet">
                        <h2>
                            Investimentos
                        </h2>
                        <ul className="investment_types_list">
                            
                            <Link to='/investimento-criptomoedas'>
                                <li>
                                    <FaBtc/>
                                    Criptomoedas
                                </li>
                            </Link>
                            
                            <Link to='/investimento-acoes'>
                                <li>
                                    <FaChartLine/>
                                Ações
                                </li>
                            </Link>
                            
                            <Link to='/investimento-fundos-imobiliarios'>
                                <li>
                                    <FaBuilding/>
                                    Fiis
                                </li>
                            </Link>
                            
                            <Link to='/investimento-dolar'> 
                                <li>
                                    <FaDollarSign/>
                                    Dólar   
                                </li>
                            </Link>  
                            
                        </ul>
                    </div>
                </div>
            </nav>
                <div className="container_btn_logout">
                    <button onClick={() => logout()}>Sair</button>
                </div>
        </div>
    )
}