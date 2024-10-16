import { useState } from 'react';
import { isFieldEmpty, isValidEmail, isPasswordMatching, isPasswordLengthValid, strengthenPassword } from '../utils/validation';


export function useAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordStrong, setIsPasswordStrong] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const [isNameEmpty, setIsNameEmpty ] = useState(true);
  const [isLastNameEmpty, setIsLastNameEmpty ] = useState(true);
  const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(true);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setFirstName(newName);

    setIsNameEmpty(isFieldEmpty(newName));
  };

  const handleLastNameChange = (e) => {
    const newLasttName = e.target.value;
    setLastName(newLasttName);

    setIsLastNameEmpty(isFieldEmpty(newLasttName));
  };

  const handleComfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setIsConfirmPasswordEmpty(isFieldEmpty(newConfirmPassword));
    setIsPasswordMatch(isPasswordMatching(password, newConfirmPassword));
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    setIsEmailEmpty(isFieldEmpty(newEmail));
    setIsEmailValid(isValidEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setIsPasswordEmpty(isFieldEmpty(newPassword));
    setIsPasswordValid(isPasswordLengthValid(newPassword));
    setIsPasswordStrong(strengthenPassword(newPassword));
  };


  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,

    setIsEmailEmpty,
    setIsPasswordEmpty,
    setIsNameEmpty,
    setIsLastNameEmpty,
    setIsConfirmPasswordEmpty,

    isNameEmpty,
    isLastNameEmpty,

    isEmailEmpty,
    isEmailValid,

    isPasswordValid,
    isPasswordEmpty,
    isPasswordStrong,

    isConfirmPasswordEmpty,
    isPasswordMatch,

    handleNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleComfirmPasswordChange,
  };
}
