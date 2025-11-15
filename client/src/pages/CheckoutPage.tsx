import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const CheckoutPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    postcode: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // כאן תהיה לוגיקת שליחת הזמנה לשרת
    alert('ההזמנה נשלחה בהצלחה! תודה על הקנייה 🎉');
    navigate('/');
  };

  if (cart.items.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2>העגלה ריקה</h2>
        <p className="text-muted mb-4">אין פריטים לתשלום</p>
        <Link to="/">
          <Button variant="primary" size="lg">חזרה לקניות</Button>
        </Link>
      </Container>
    );
  }

  return (
    <div className="checkout-page">
      {/* Header */}
      <header className="bg-primary text-white py-3 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link to="/" className="text-white text-decoration-none">
                <h1 className="mb-0">🎁 GiftBox</h1>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className="py-4">
        <h2 className="mb-4">השלמת הזמנה</h2>

        <Row>
          {/* Checkout Form */}
          <Col xs={12} lg={8} className="mb-4">
            <Card className="shadow">
              <Card.Header>
                <h5 className="mb-0">פרטי משלוח</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>שם מלא *</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="הכנס שם מלא"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>טלפון *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="050-1234567"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>אימייל *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>רחוב ומספר בית *</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      required
                      placeholder="רחוב הרצל 10"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={8}>
                      <Form.Group className="mb-3">
                        <Form.Label>עיר *</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="תל אביב"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>מיקוד</Form.Label>
                        <Form.Control
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          placeholder="1234567"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>הערות למשלוח (אופציונלי)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="הוראות מיוחדות למשלוח..."
                    />
                  </Form.Group>

                  <Button type="submit" variant="success" size="lg" className="w-100">
                    אישור והמשך לתשלום 💳
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Order Summary */}
          <Col xs={12} lg={4}>
            <Card className="shadow sticky-top" style={{ top: '1rem' }}>
              <Card.Header>
                <h5 className="mb-0">סיכום הזמנה</h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <h6>פריטים ({cart.items.length}):</h6>
                  {cart.items.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between mb-2">
                      <small>{item.title} x{item.quantity}</small>
                      <small>₪{item.price * item.quantity}</small>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>סכום ביניים:</span>
                  <strong>₪{cart.subtotal}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>משלוח:</span>
                  <strong>₪{cart.shipping || 0}</strong>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">סה"כ לתשלום:</h5>
                  <h5 className="mb-0 text-success">₪{cart.total}</h5>
                </div>
                <small className="text-muted">
                  * התשלום מאובטח ומוצפן
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutPage;
