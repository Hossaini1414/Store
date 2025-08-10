import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //add to cart
    const addToCart = (product) => {
        setCart((prev) => {
            const existingItem = prev.find(item => item.title === product.title);
            if (existingItem) {
                return prev.map(item =>
                    item.title === product.title
                        ? { ...item, quantitly: item.quantitly + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantitly: 1 }];
            }
        });
    };

    //remove from cart
    const removeFromCart = (index) =>{
        setCart((prev)=> prev.filter((_,i) => i !== index));
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    ); 
};
export const useCart = () => useContext(CartContext);