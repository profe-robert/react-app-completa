import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

function AppRoutes(){
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
