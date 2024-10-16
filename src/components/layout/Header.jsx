import logo from '../../assets/images/logo_dolar.png'
import { Link } from 'react-router-dom'
import '../../assets/styles/Header.css'

export default function Header() {
    return (
        <header>
            <div className='container_header'>
                <Link to='/'>
                    <img src={logo} alt="logo_dolar" />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <span>|</span>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}