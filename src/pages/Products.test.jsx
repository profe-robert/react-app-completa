import { render, screen } from '@testing-library/react';
import Products from './Products';

jest.mock('../context/AppContext', () => ({
    useCart: () => ({ 
        addToCart: jest.fn()
    }),
}));

describe('Componente Products', () => {

    test('se monta correctamente y muestra el título', () => {
        render(<Products />);
        expect(screen.getByText(/gaming store/i)).toBeInTheDocument();
    });

    test('renderiza todas las tarjetas de producto', () => {
        // reemplaza el contenido por la pruebas específicas
        render(<Products />);
        expect(screen.getByText(/gaming store/i)).toBeInTheDocument();
    });

    test('el botón "Agregar" aparece en cada tarjeta', () => {
        // reemplaza el contenido por la pruebas específicas
        render(<Products />);
        expect(screen.getByText(/gaming store/i)).toBeInTheDocument();
    });

    test('renderiza productos y permite agregar', async () => {
        // reemplaza el contenido por la pruebas específicas
        render(<Products />);
        expect(screen.getByText(/gaming store/i)).toBeInTheDocument();
    });

});
