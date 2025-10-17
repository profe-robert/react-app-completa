import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

function NavBar(){
    const { cartCount } = useApp();
    return (
        <Navbar bg="light" expand="md" className="mb-3 border-bottom">
        <Container>
            <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="/productos">
                🛒 <Badge bg="primary" pill>{cartCount}</Badge>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;
