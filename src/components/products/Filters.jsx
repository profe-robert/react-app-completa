import { ButtonGroup, Button, Badge } from 'react-bootstrap';

export default function Filters({ current, onChange, options, total }) {
    const allActive = current === 'all';
    return (
        <div className="d-flex align-items-center justify-content-between mb-3">
        <ButtonGroup>
            <Button
            variant={allActive ? 'primary' : 'outline-primary'}
            onClick={() => onChange('all')}
            >
            Todos <Badge bg={allActive ? 'light' : 'primary'} className="ms-1">{total}</Badge>
            </Button>
            {options.map(opt => {
            const isActive = current === opt;
            return (
                <Button
                key={opt}
                variant={isActive ? 'primary' : 'outline-primary'}
                onClick={() => onChange(opt)}
                >
                {opt}
                </Button>
            );
            })}
        </ButtonGroup>
        </div>
    );
}
