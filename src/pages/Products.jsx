import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useApp } from '../context/AppContext';

const products = [
    { id: 1, name: 'Producto A', price: 4990 },
    { id: 2, name: 'Producto B', price: 7990 },
    { id: 3, name: 'Producto C', price: 12990 }
];

function Products(){
    const { addToCart } = useApp();
    return (
        <main>
        <Container>
            <h2>Productos</h2>
            <Row xs={1} sm={2} lg={3} className="g-3">
            {products.map(p => (
                <Col key={p.id}>
                <Card className="h-100">
                    <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text className="text-muted">
                        ${p.price.toLocaleString('es-CL')}
                    </Card.Text>
                    <Button onClick={addToCart}>Agregar</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
        </main>
    );
}

export default Products;
