import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_dolar.png';

export default function LogoDolar() {
    return (
        <div className='logo_dolar'>
            <Link to='/'>
                <img src={logo} alt="logo dolar"/>
            </Link>
        </div>

    )
}