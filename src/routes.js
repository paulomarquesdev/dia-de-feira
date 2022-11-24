import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Login } from 'pages/Login';
import { Feira } from 'pages/Feira';
import { Carrinho } from 'pages/Carrinho';
import { UserProvider } from 'common/context/User';


export function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/" 
                    element={
                        <UserProvider>
                            <Login />
                        </UserProvider>
                    }
                />
                <Route path="/feira" element={<Feira />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}