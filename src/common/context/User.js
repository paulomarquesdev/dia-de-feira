import { createContext, useState } from "react";

// crio o context que vai ser chamado na página (Login) pelo useContext do react onde seus values serão desestruturados
export const UserContext = createContext();
// nomeio o context
UserContext.displayName = 'User';

// crio um provedor para meu context
// meu provedor recebe um filho como props que será passado quando chamado no arquivo de routes
export const UserProvider = ({ children }) => {
    //crio meus estados para meu filho
    const [ name, setName ] = useState('');
    const [ balance, setBalance ] = useState(0);

    // retorno meu provedor com os valores dos estados e a prop filho
    return (
        <UserContext.Provider value={{ name, setName, balance, setBalance }}>
            {children}
        </UserContext.Provider>
    );
}