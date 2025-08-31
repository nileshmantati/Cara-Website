import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    // console.log(cart[1]?.id);
    // useEffect(() => {
    //     const StoreCart = cart.map(({ id, qty }) => ({ id, qty }));
    //     localStorage.setItem('cartname', JSON.stringify(StoreCart));
    // }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prev, { ...product, qty: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQty = (id, qty) => {
        setCart((prev) =>
            prev.map((item) => (item.id === id ? { ...item, qty } : item))
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
            {children}
        </CartContext.Provider>
    );
};
