import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact Component', () => {
    
    test('el componente Contact se monta correctamente', () => {
        render(<Contact />);

        // Comprueba que el título esté en el documento
        const titulo = screen.getByRole('heading', { name: /contacto/i });
        expect(titulo).toBeInTheDocument();

        // Comprueba que existan los elementos principales del formulario
        expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();

        // Y que el botón de enviar esté presente
        expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
    });

    test('muestra errores cuando el formulario se envía vacío', async () => {
        render(<Contact />);

        // Click en "Enviar" sin rellenar nada
        const enviarBtn = screen.getByRole('button', { name: /enviar/i });
        await userEvent.click(enviarBtn);

        expect(screen.getByText(/El nombre es obligatorio/i)).toBeInTheDocument();
        expect(screen.getByText(/El correo es obligatorio y debe ser válido/i)).toBeInTheDocument();
        expect(screen.getByText(/El mensaje es obligatorio/i)).toBeInTheDocument();
        expect(screen.queryByText(/¡Mensaje enviado/i)).not.toBeInTheDocument();
    });
    
    test('envío válido muestra mensaje de éxito', async () => {
        render(<Contact />);

        await userEvent.type(screen.getByLabelText(/nombre/i), 'Ada Lovelace');
        await userEvent.type(screen.getByLabelText(/correo/i), 'ada@example.com');
        await userEvent.type(screen.getByLabelText(/mensaje/i), 'Hola');

        await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

        expect(screen.getByText(/¡Mensaje enviado/i)).toBeInTheDocument();
    });
});
