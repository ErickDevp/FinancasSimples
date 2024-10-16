import { FaInstagram, FaYoutube } from 'react-icons/fa';
import '../../assets/styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='icons_redes'>
                <p><FaInstagram/></p>
                <p><FaYoutube/></p>
            </div>
            <p>
                &copy; 2024 Todos os direitos reservados
            </p>
        </footer>
    )
}