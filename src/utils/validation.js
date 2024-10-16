
export const isFieldEmpty = (campo) => {
    return !!campo;
}

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isPasswordLengthValid = (password) => {
    return password.length >= 8;
};

export const isPasswordMatching  = (password, repeatedPassword) => {
    return password === repeatedPassword;
};

export const strengthenPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
};

export const isFormRegisterValid = (email, password, firstName, lastName, confirmPassword) => {
    return isFieldEmpty(email) && isValidEmail(email) && 
           isFieldEmpty(password) && isFieldEmpty(firstName) &&
           isFieldEmpty(lastName) && isFieldEmpty(confirmPassword) && isPasswordLengthValid(password) && isPasswordMatching(password, confirmPassword);
}

export const isFormLoginValid = (email, password) => {
    return isFieldEmpty(email) && isValidEmail(email) && isFieldEmpty(password);
}

export const isFormRedefinirValid = (email) => {
    return isFieldEmpty(email) && isValidEmail(email);
}