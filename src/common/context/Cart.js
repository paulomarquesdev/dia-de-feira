import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [productAmount, setProductAmount] = useState(0);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                productAmount,
                setProductAmount
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const {
        cart,
        setCart,
        productAmount,
        setProductAmount
    } = useContext(CartContext);

    function updateAmount(id, amount) {
        return cart.map(cartItem => {
            if (cartItem.id === id) cartItem.amount += amount;

            return cartItem;
        })
    }

    function addProduct(newProduct) {
        const productExist = cart.some((item) => item.id === newProduct.id);

        if (!productExist) {
            newProduct.amount = 1;

            return setCart((cartLast) => [...cartLast, newProduct]);
        }

        setCart(updateAmount(newProduct.id, 1));
    }

    function removeProduct(id) {
        const product = cart.find((cartItem) => cartItem.id === id);

        const isLastItem = product.amount === 1;

        if (isLastItem) {
            return setCart(cartLast =>
                cartLast.filter(cartItem => cartItem.id !== id)
            )
        }

        setCart(updateAmount(id, -1));
    }

    useEffect(() => {
        const newAmount = cart.reduce((counter, product) =>
            counter + product.amount, 0
        );
        setProductAmount(newAmount);
    }, [cart, setProductAmount]);

    return {
        cart,
        setCart,
        addProduct,
        removeProduct,
        productAmount,
        setProductAmount
    };
};
