import imgGoogle from '../../assets/images/logo_google.png';
import '../../assets/styles/AuthWithGoogle.css';

export default function AuthWithGoogle() {
    return (
        <div className='auth_google'>
            <img src={imgGoogle} alt="logo google" />
            <span>Entrar com o google</span>
        </div>
    )
}