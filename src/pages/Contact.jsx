import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Contact(){
    const [msg, setMsg] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = (data.get('name') || '').trim();
        const email = (data.get('email') || '').trim();
        const message = (data.get('message') || '').trim();

        const errs = [];
        if(!name) errs.push('El nombre es obligatorio');
        if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('El correo es obligatorio y debe ser válido');
        if(!message) errs.push('El mensaje es obligatorio');

        setErrors(errs);
        setMsg(errs.length === 0 ? '¡Mensaje enviado (simulado)!' : '');
    };

    return (
        <main>
        <Container>
            <h2>Contacto</h2>
            {msg && <Alert variant="success">{msg}</Alert>}
            {errors.length > 0 && <Alert variant="danger">{errors.join('. ')}</Alert>}

            <Form onSubmit={onSubmit} noValidate>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" required />
            </Form.Group>

            <Button type="submit">Enviar</Button>
            </Form>
        </Container>
        </main>
    );
}

export default Contact;
