import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Login } from 'pages/Login';
import { Feira } from 'pages/Feira';
import { Carrinho } from 'pages/Carrinho';

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/feira" element={<Feira />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}