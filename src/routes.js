import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Login } from 'pages/Login';
import { Feira } from 'pages/Feira';
import { Carrinho } from 'pages/Carrinho';
import { useState } from 'react';
import { UserContext } from 'common/context/User';


export function AppRouter() {
    const [ name, setName ] = useState('');
    const [ balance, setBalance ] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/" 
                    element={
                        <UserContext.Provider value={{ name, setName, balance, setBalance }}>
                            <Login />
                        </UserContext.Provider>
                    }
                />
                <Route path="/feira" element={<Feira />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}