import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Login } from 'pages/Login';
import { Feira } from 'pages/Feira';
import { Cart } from 'pages/Cart';
import { UserProvider } from 'common/context/User';
import { CartProvider } from 'common/context/Cart';


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
                <Route
                    path="/feira" 
                    element={
                        <UserProvider>
                            <CartProvider>
                                <Feira />
                            </CartProvider>
                        </UserProvider>
                    }
                />
                <Route
                    path="/Cart"
                    element={
                        <CartProvider>
                            <Cart />
                        </CartProvider>
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}