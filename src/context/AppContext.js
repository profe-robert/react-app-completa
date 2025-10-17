import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }){
    const [cartCount, setCartCount] = useState(0);
    const addToCart = () => setCartCount(c => c + 1);
    return <AppContext.Provider value={{ cartCount, addToCart }}>{children}</AppContext.Provider>;
}

export function useApp(){
    const ctx = useContext(AppContext);
    if(!ctx) throw new Error('useApp debe usarse dentro de AppProvider');
    return ctx;
}
