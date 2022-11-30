import { createContext, useContext, useState } from "react";


export const PaymentContext = createContext();
PaymentContext.displayName = 'Payment';

export const PaymentProvider = ({ children }) => {
    const paymentType = [
        {
            name: "Boleto",
            fees: 1,
            id: 1
        },
        {
            name: "Cartão de Crédito",
            fees: 1.3,
            id: 2
        },
        {
            name: "PIX",
            fees: 1,
            id: 3
        }
    ];
    const [ formOfPayment, setFormOfPayment ] = useState(paymentType[0]);



    return (
        <PaymentContext.Provider
            value={{
                paymentType,
                formOfPayment,
                setFormOfPayment
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};

export const usePaymentContext = () => {
    const { paymentType, formOfPayment, setFormOfPayment } = useContext(PaymentContext);

    function updatePaymentForm(id) {
        const currentPayment = paymentType.find(payment => payment.id === id);

        setFormOfPayment(currentPayment)
    };

    return {
        paymentType,
        formOfPayment,
        updatePaymentForm
    };
};