import { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useCart } from '../context/AppContext';
import { GAMING_PRODUCTS, CATEGORIES } from '../data/gaming.mock';
import Filters from '../components/products/Filters';
import ProductGrid from '../components/products/ProductGrid';

export default function Products() {
    const { addToCart } = useCart();
    const [filter, setFilter] = useState('all');

    const list = useMemo(() => {
        return filter === 'all'
        ? GAMING_PRODUCTS
        : GAMING_PRODUCTS.filter(p => p.category === filter);
    }, [filter]);

    return (
        <main>
        <Container>
            <h2 className="mb-2">Gaming Store</h2>
            <p className="text-muted mb-3">Consolas, periféricos y accesorios</p>

            <Filters
            current={filter}
            onChange={setFilter}
            options={CATEGORIES}
            total={GAMING_PRODUCTS.length}
            />

            <ProductGrid items={list} onAdd={addToCart} />
        </Container>
        </main>
    );
}
