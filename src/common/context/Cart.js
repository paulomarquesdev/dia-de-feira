import { createContext, useContext, useEffect, useState } from "react";
import { usePaymentContext } from "./Payment";
import { UserContext } from "./User";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [productAmount, setProductAmount] = useState(0);
    const [totalValueCart, setTotalValueCart] = useState(0);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                productAmount,
                setProductAmount,
                totalValueCart,
                setTotalValueCart
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
        setProductAmount,
        totalValueCart,
        setTotalValueCart
    } = useContext(CartContext);
    const { formOfPayment } = usePaymentContext();
    const { setBalance } = useContext(UserContext);

    function updateAmount(id, amount) {
        return cart.map(cartItem => {
            if (cartItem.id === id) cartItem.amount += amount;

            return cartItem;
        })
    };

    function addProduct(newProduct) {
        const productExist = cart.some((item) => item.id === newProduct.id);

        if (!productExist) {
            newProduct.amount = 1;

            return setCart((cartLast) => [...cartLast, newProduct]);
        }

        setCart(updateAmount(newProduct.id, 1));
    };

    function removeProduct(id) {
        const product = cart.find((cartItem) => cartItem.id === id);

        const isLastItem = product.amount === 1;

        if (isLastItem) {
            return setCart(cartLast =>
                cartLast.filter(cartItem => cartItem.id !== id)
            )
        }

        setCart(updateAmount(id, -1));
    };

    function purchase () {
        setCart([]);
        setBalance(currentBalance => currentBalance - totalValueCart);
    };

    useEffect(() => {
        const { newAmount, newTotal } = cart.reduce(
            (counter, product) => ({
                newAmount: counter.newAmount + product.amount,
                newTotal: counter.newTotal + (product.value * product.amount),
            }), {
                newAmount: 0,
                newTotal: 0
            }
        );
        setProductAmount(newAmount);
        setTotalValueCart(newTotal * formOfPayment.fees);
    }, [cart, setProductAmount, setTotalValueCart, formOfPayment]);

    return {
        cart,
        setCart,
        addProduct,
        removeProduct,
        productAmount,
        setProductAmount,
        totalValueCart,
        purchase
    };
};
