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
import { PaymentProvider } from 'common/context/Payment';


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
                    path="/login" 
                    element={
                        <UserProvider>
                            <PaymentProvider>
                                <Login />
                            </PaymentProvider>
                            
                        </UserProvider>
                    }
                />
                <Route
                    path="/feira" 
                    element={
                        <UserProvider>
                            <CartProvider>
                                <PaymentProvider>
                                    <Feira />
                                </PaymentProvider>
                            </CartProvider>
                        </UserProvider>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <UserProvider>
                            <CartProvider>
                                <PaymentProvider>
                                    <Cart />
                                </PaymentProvider>
                            </CartProvider>
                        </UserProvider>
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}