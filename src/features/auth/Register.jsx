import {  FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash  } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from '../../components/layout/Container';
import AuthWithGoogle from '../../components/common/AuthWithGoogle.jsx';
import { useAuthForm } from '../../hooks/useAuthForm.js';
import LogoDolar from '../../components/common/LogoDolar.jsx';
import { isFieldEmpty, isFormRegisterValid } from '../../utils/validation';
import {firebaseAuth} from '../../services/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../services/firebase.js'; 
import ErrorModal from '../../components/common/ErrorModal.jsx';
import { useState } from 'react';
import LoadingSpinner from '../../components/common/LoadingSpinner.jsx';

export default function Register() {
    const navigate = useNavigate()
    const [showError, setShowError] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [msgError, setMsgError] = useState('');


    const triggerError = () => {
        setShowError(true);

        setTimeout(() => {
            setShowError(false);
        }, 3000);
    };

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,

        isNameEmpty,
        isLastNameEmpty,

        isEmailEmpty,
        isEmailValid,
        isPasswordValid,
        isPasswordEmpty,

        isConfirmPasswordEmpty,
        isPasswordMatch,
        isPasswordStrong,

        handleNameChange,
        handleLastNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleComfirmPasswordChange,

        setIsEmailEmpty,
        setIsPasswordEmpty,
        setIsNameEmpty,
        setIsLastNameEmpty,
        setIsConfirmPasswordEmpty
      } = useAuthForm();

      const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        
        if(isFormRegisterValid(email, password, firstName, lastName, confirmPassword)) {
            setShowLoading(true);

            try {
                const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
                const user = userCredential.user;
    
                await setDoc(doc(firestore, 'users', user.uid), {
                    firstName,
                    lastName,
                    email,
                });
    
                navigate('/home')
    
            } catch (error) {
                setShowLoading(false);
    
                if(!showError) {
                    if (error.code === 'auth/email-already-in-use') {
                        triggerError();
                        setMsgError('Este email já está associado a outra conta.');
                    } else {
                        triggerError();
                        setMsgError('Erro ao registrar. Tente novamente.');
                    }
                }
            }
        }
  
        setIsNameEmpty(isFieldEmpty(firstName));
        setIsLastNameEmpty(isFieldEmpty(lastName));
        setIsEmailEmpty(isFieldEmpty(email));
        setIsPasswordEmpty(isFieldEmpty(password));
        setIsConfirmPasswordEmpty(isFieldEmpty(confirmPassword));
      };

    return (
        <Container>
            {showLoading && <LoadingSpinner/>}
            <ErrorModal show={showError} msg={msgError}/>
            <div className='container_segundary'>
                <form onSubmit={handleRegisterSubmit}>
                    <LogoDolar/>
                    <h1>Crie sua conta</h1>
                    <div className='inputs'>
                        <Input 
                            type='text'
                            placeholder='Nome' 
                            icon={<FaUser/>}
                            onChange={handleNameChange}
                        />
                        {!isNameEmpty && <span className='erro'>Campo obrigatório!</span>}

                        <Input 
                            type='text'
                            placeholder='Sobrenome' 
                            icon={<FaUser/>}
                            onChange={handleLastNameChange}
                        />
                        {!isLastNameEmpty && <span className='erro'>Campo obrigatório!</span>}                  

                        <Input 
                            type='email'
                            placeholder='E-mail' 
                            icon={<FaEnvelope/>}
                            onChange={handleEmailChange}
                        />
                        {!isEmailEmpty ? <span className='erro'>Campo obrigatório!</span> : 
                         !isEmailValid && <span className='erro'>Email inválido!</span>}

                        <Input 
                            type='password'
                            placeholder='Senha' 
                            icon={<FaLock/>} 
                            iconVisibility={<FaEye/>} 
                            iconVisibilityOf={<FaEyeSlash/>}
                            onChange={handlePasswordChange}
                        />
                        {!isPasswordEmpty ? <span className='erro'>Campo obrigatório!</span> : 
                         !isPasswordValid ? <span className='erro'>Senha muito curta!</span> : 
                         !isPasswordStrong && <span className='erro'>Senha fraca!</span>}
                        <Input 
                            type='password'
                            placeholder='Repita a senha' 
                            icon={<FaLock/>} 
                            iconVisibility={<FaEye/>} 
                            iconVisibilityOf={<FaEyeSlash/>}
                            onChange={handleComfirmPasswordChange}
                        />
                        {!isConfirmPasswordEmpty ? <span className='erro'>Campo obrigatório!</span> : 
                         !isPasswordMatch && <span className='erro'>As senhas não coincidem</span>}
                    </div>
                    <Button textBtn='Criar conta' marginTop={'40px'}/>
    
                </form>
                <p className='p_center' style={{marginTop: '30px', fontWeight: 'bold'}}>Ou crie uma conta com</p>
                <AuthWithGoogle/>
                <p className='p_center'>
                    já tem uma conta? <Link to='/login'>Entrar</Link>
                </p>
            </div>
        </Container>
    )
}