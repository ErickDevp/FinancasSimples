import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthForm } from '../../hooks/useAuthForm';
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from '../../components/layout/Container';
import LogoDolar from '../../components/common/LogoDolar';
import ErrorModal from '../../components/common/ErrorModal.jsx';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { isFieldEmpty, isFormRedefinirValid } from '../../utils/validation';
import {firebaseAuth} from '../../services/firebase.js'
import LoadingSpinner from '../../components/common/LoadingSpinner.jsx';

export default function Redefinir() {
    const [showError, setShowError] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const {
        email,
        isEmailValid,
        isEmailEmpty,
        setIsEmailEmpty,
        handleEmailChange,
      } = useAuthForm();

    const triggerError = () => {
        setShowError(true);

        setTimeout(() => {
            setShowError(false);
        }, 3000);
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        if(isFormRedefinirValid(email)) {
            setShowLoading(true);

            try {
                await sendPasswordResetEmail(firebaseAuth, email);
                setShowLoading(false);
            } catch (error) {
                setShowLoading(false);
                if(!showError) {
                    triggerError();
                }
            }
        }
        
        setIsEmailEmpty(isFieldEmpty(email));
    };

    return (
        <Container padding='90px'>
            {showLoading && <LoadingSpinner/>}
            <ErrorModal show={showError} msg="E-mail nao encontrado!"/>
            <div className='container_segundary'>
                <form onSubmit={handlePasswordReset}>
                    <LogoDolar/>
                    <h1>Redefinir senha</h1>
                    <div className='inputs' style={{marginBottom: '25px'}}>
                        <Input 
                            type='email' 
                            placeholder='E-mail' 
                            icon={<FaEnvelope/>}
                            onChange={handleEmailChange}
                        />
                        {!isEmailEmpty ? <span className='erro'>Campo obrigatório!</span> :
                         !isEmailValid && <span className='erro'>Email inválido!</span>}
                    </div>
                    <Button 
                        textBtn='REDEFINIR SENHA' marginTop={'0px'}
                    />
                    <p className='p_center'>
                        <Link to='/login'>Voltar</Link>
                    </p>
                </form>
            </div>
        </Container>
    )
}