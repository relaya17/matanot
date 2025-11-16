import { Container, Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  return (
    <div className="cart-page">
      {/* Header */}
      <header className="bg-primary text-white py-3 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col xs={6}>
              <Link to="/" className="text-white text-decoration-none">
                <h1 className="mb-0">🎁 GiftBox</h1>
              </Link>
            </Col>
            <Col xs={6} className="text-end">
              <Link to="/profile" className="btn btn-outline-light btn-sm">
                👤 <span className="d-none d-sm-inline">חשבון</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className="py-4">
        <Row>
          <Col xs={12}>
            <h2 className="mb-4">עגלת הקניות שלי</h2>
          </Col>
        </Row>

        {cart.items.length === 0 ? (
          <Row>
            <Col xs={12}>
              <Card className="text-center py-5">
                <Card.Body>
                  <div className="mb-4" style={{ fontSize: '4rem' }}>
                    🛒
                  </div>
                  <h3 className="mb-3">העגלה ריקה</h3>
                  <p className="lead mb-4">עדיין לא הוספת מוצרים לעגלה</p>
                  <Link to="/" className="btn btn-primary btn-lg">
                    התחל לקנות
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} lg={8} className="mb-4">
              <Card>
                <Card.Header>
                  <h5 className="mb-0">פריטים בעגלה ({cart.items.length})</h5>
                </Card.Header>
                <ListGroup variant="flush">
                  {cart.items.map((item) => (
                    <ListGroup.Item key={item.productId}>
                      <Row className="align-items-center">
                        <Col xs={3} md={2}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: '80px', objectFit: 'cover' }}
                          />
                        </Col>
                        <Col xs={9} md={4}>
                          <h6 className="mb-1">{item.title}</h6>
                          <small className="text-muted">₪{item.price}</small>
                        </Col>
                        <Col xs={6} md={3} className="mt-2 mt-md-0">
                          <div className="d-flex align-items-center">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="mx-3">{item.quantity}</span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </Col>
                        <Col xs={4} md={2} className="mt-2 mt-md-0 text-center">
                          <strong>₪{item.price * item.quantity}</strong>
                        </Col>
                        <Col xs={2} md={1} className="mt-2 mt-md-0 text-end">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleRemove(item.productId)}
                          >
                            🗑️
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>

            <Col xs={12} lg={4}>
              <Card className="sticky-top" style={{ top: '1rem' }}>
                <Card.Header>
                  <h5 className="mb-0">סיכום הזמנה</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <span>סכום ביניים:</span>
                    <strong>₪{cart.subtotal}</strong>
                  </div>
                  {cart.shipping && (
                    <div className="d-flex justify-content-between mb-2">
                      <span>משלוח:</span>
                      <strong>₪{cart.shipping}</strong>
                    </div>
                  )}
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">סה"כ לתשלום:</h5>
                    <h5 className="mb-0 text-primary">₪{cart.total}</h5>
                  </div>
                  <Link to="/checkout" className="w-100">
                    <Button variant="success" size="lg" className="w-100">
                      המשך לתשלום
                    </Button>
                  </Link>
                  <Link to="/" className="w-100 mt-2">
                    <Button variant="outline-secondary" className="w-100">
                      המשך בקניות
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
