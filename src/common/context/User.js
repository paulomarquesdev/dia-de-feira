import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ name, setName ] = useState('');
    const [ balance, setBalance ] = useState(0);

    return (
        <UserContext.Provider value={{ name, setName, balance, setBalance }}>
            {children}
        </UserContext.Provider>
    );
}