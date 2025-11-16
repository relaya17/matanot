import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  const cartItemsCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-primary text-white py-3 mb-4 shadow">
      <Container>
        <Row className="align-items-center">
          <Col xs={6} md={4}>
            <Link to="/" className="text-white text-decoration-none">
              <h1 className="mb-0" style={{ fontSize: '1.75rem' }}>🎁 GiftBox</h1>
            </Link>
          </Col>
          <Col xs={6} md={8} className="text-end">
            <Link to="/cart" className="btn btn-outline-light btn-sm me-2 position-relative">
              🛒 <span className="d-none d-sm-inline">עגלה</span>
              {cartItemsCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.7rem' }}
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Link>
            <Link to="/profile" className="btn btn-outline-light btn-sm">
              👤 <span className="d-none d-sm-inline">חשבון</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;

