import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function AppProvider({ children }){
    const [cartCount, setCartCount] = useState(0);
    const addToCart = () => setCartCount(c => c + 1);
    return <CartContext.Provider value={{ cartCount, addToCart }}>{children}</CartContext.Provider>;
}

export function useCart(){
    const ctx = useContext(CartContext);
    if(!ctx) throw new Error('useApp debe usarse dentro de AppProvider');
    return ctx;
}
