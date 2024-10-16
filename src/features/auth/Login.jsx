import { useAuthForm } from '../../hooks/useAuthForm.js';
import { useState } from 'react';

import {  FaEnvelope, FaLock, FaEye, FaEyeSlash  } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/layout/Container';
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AuthWithGoogle from '../../components/common/AuthWithGoogle.jsx';
import LogoDolar from '../../components/common/LogoDolar.jsx';
import { isFieldEmpty, isFormLoginValid } from '../../utils/validation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {firebaseAuth} from '../../services/firebase.js'
import ErrorModal from '../../components/common/ErrorModal.jsx';
import LoadingSpinner from '../../components/common/LoadingSpinner.jsx';

export default function Login() {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const triggerError = () => {
        setShowError(true);

        setTimeout(() => {
            setShowError(false);
        }, 3000);
    };

    const {
        email,
        password,

        setIsEmailEmpty,
        setIsPasswordEmpty,

        isEmailEmpty,
        isEmailValid,
        isPasswordEmpty,

        handleEmailChange,
        handlePasswordChange
      } = useAuthForm();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        
        if(isFormLoginValid(email, password)) {
            setShowLoading(true);
            
            try {
                await signInWithEmailAndPassword(firebaseAuth, email, password);
                navigate('/home');
            } catch(error) {
                setShowLoading(false);
                if(!showError) {
                    triggerError();
                }
            }
        }

        setIsEmailEmpty(isFieldEmpty(email));
        setIsPasswordEmpty(isFieldEmpty(password));
    };

    return (
        <Container>
            {showLoading && <LoadingSpinner/>}
            <ErrorModal show={showError} msg="E-mail ou senha inválido!"/>
            <div className='container_segundary'>
                <form onSubmit={handleLoginSubmit}>
                    <LogoDolar/>
                    <h1>Entre com sua conta</h1>   
                    <div className='inputs'>
                        <Input 
                            type='email' 
                            icon={<FaEnvelope/>} 
                            placeholder="E-mail" 
                            onChange={handleEmailChange}
                        />
                        {!isEmailEmpty ? <span className='erro'>Campo obrigatório!</span> :
                         !isEmailValid && <span className='erro'>Email inválido!</span>}

                        <Input 
                            type='password' 
                            icon={<FaLock/>} 
                            iconVisibility={<FaEye/>} 
                            iconVisibilityOf={<FaEyeSlash/>} 
                            placeholder="Senha" 
                            onChange={handlePasswordChange}
                        />
                        <div style={{display: 'flex', position:'relative'}}>
                            {!isPasswordEmpty && <span className='erro'>Campo obrigatório!</span>}
                            <Link to='/redefenir-senha' style={{textAlign: 'end', position:'absolute', right:0, top: 0}}>Esqueci minha senha</Link>
                        </div>

                    </div>
                    <Button textBtn="Entrar" marginTop={'50px'}/>
                </form>
                <p className='p_center' style={{marginTop: '25px', fontWeight: 'bold'}}>Ou entre com</p>
                <AuthWithGoogle/>
                <p className='p_center'>Não tem uma conta? <Link to='/Register'>Registre-se</Link></p>
            </div>
        </Container>
    )
}