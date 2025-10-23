import { Card, Button, Badge } from 'react-bootstrap';

export default function ProductCard({ product, onAdd }) {
    const { name, price, category, imageUrl } = product;

    return (
        <Card className="h-100 shadow-sm card-hover">
        {imageUrl && (
            <Card.Img
            variant="top"
            src={imageUrl}
            alt={`Imagen de ${name}`}
            loading="lazy"
            style={{ objectFit: 'cover', height: 180 }}
            />
        )}
        <Card.Body className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="mb-0" style={{ fontSize: '1rem', lineHeight: 1.2 }}>
                {name}
            </Card.Title>
            {category && <Badge bg="secondary">{category}</Badge>}
            </div>

            <Card.Text className="text-muted mb-3">
            ${Number(price).toLocaleString('es-CL')}
            </Card.Text>

            <Button
            variant="primary"
            onClick={onAdd}
            className="mt-auto"
            aria-label={`Agregar ${name} al carrito`}
            >
            Agregar
            </Button>
        </Card.Body>
        </Card>
    );
}
