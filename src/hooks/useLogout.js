import { getAuth, signOut } from 'firebase/auth';

export default  function useLogout() {
    const auth = getAuth();

    const logout = async () => {
        try {
            await signOut(auth);
            console.log('Usuário deslogado com sucesso');
        } catch (error) {
            console.error('Erro ao deslogar:', error);
        }
    }

    return {logout}
};
