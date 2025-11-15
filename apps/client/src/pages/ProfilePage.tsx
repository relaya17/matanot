import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');

  const [profileData, setProfileData] = useState({
    fullName: 'שם משתמש',
    email: 'user@example.com',
    phone: '050-1234567',
    street: 'רחוב הרצל 10',
    city: 'תל אביב',
    postcode: '1234567',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('הפרטים נשמרו בהצלחה! ✅');
  };

  // דוגמאות להזמנות
  const orders = [
    {
      id: 'ORD-001',
      date: '15/11/2025',
      total: 450,
      status: 'נשלח',
      items: ['מארז ליום הולדת', 'מארז שוקולדים'],
    },
    {
      id: 'ORD-002',
      date: '10/11/2025',
      total: 320,
      status: 'בדרך',
      items: ['מארז רומנטי'],
    },
    {
      id: 'ORD-003',
      date: '05/11/2025',
      total: 580,
      status: 'הושלם',
      items: ['מארז יוקרה', 'מארז פרחים'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'נשלח':
        return 'primary';
      case 'בדרך':
        return 'warning';
      case 'הושלם':
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="profile-page">
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
        <h2 className="mb-4">אזור אישי</h2>

        <Row>
          {/* Sidebar */}
          <Col xs={12} md={3} className="mb-4">
            <Card className="shadow">
              <ListGroup variant="flush">
                <ListGroup.Item
                  action
                  active={activeTab === 'profile'}
                  onClick={() => setActiveTab('profile')}
                  style={{ cursor: 'pointer' }}
                >
                  👤 הפרטים שלי
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  active={activeTab === 'orders'}
                  onClick={() => setActiveTab('orders')}
                  style={{ cursor: 'pointer' }}
                >
                  📦 ההזמנות שלי
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Main Content */}
          <Col xs={12} md={9}>
            {activeTab === 'profile' && (
              <Card className="shadow">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">פרטים אישיים</h5>
                  {!isEditing ? (
                    <Button variant="outline-primary" size="sm" onClick={() => setIsEditing(true)}>
                      ✏️ עריכה
                    </Button>
                  ) : (
                    <div>
                      <Button variant="success" size="sm" className="me-2" onClick={handleSave}>
                        💾 שמור
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => setIsEditing(false)}
                      >
                        ביטול
                      </Button>
                    </div>
                  )}
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>שם מלא</Form.Label>
                          <Form.Control
                            type="text"
                            name="fullName"
                            value={profileData.fullName}
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>טלפון</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>אימייל</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>רחוב ומספר בית</Form.Label>
                      <Form.Control
                        type="text"
                        name="street"
                        value={profileData.street}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>

                    <Row>
                      <Col md={8}>
                        <Form.Group className="mb-3">
                          <Form.Label>עיר</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            value={profileData.city}
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>מיקוד</Form.Label>
                          <Form.Control
                            type="text"
                            name="postcode"
                            value={profileData.postcode}
                            onChange={handleChange}
                            disabled={!isEditing}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            )}

            {activeTab === 'orders' && (
              <Card className="shadow">
                <Card.Header>
                  <h5 className="mb-0">ההזמנות שלי</h5>
                </Card.Header>
                <Card.Body>
                  {orders.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="text-muted">עדיין לא ביצעת הזמנות</p>
                      <Link to="/">
                        <Button variant="primary">התחל לקנות</Button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      {orders.map((order) => (
                        <Card key={order.id} className="mb-3">
                          <Card.Body>
                            <Row className="align-items-center">
                              <Col xs={12} md={3}>
                                <div>
                                  <strong>הזמנה #{order.id}</strong>
                                  <br />
                                  <small className="text-muted">{order.date}</small>
                                </div>
                              </Col>
                              <Col xs={12} md={4}>
                                <div>
                                  {order.items.map((item, idx) => (
                                    <div key={idx}>
                                      <small>• {item}</small>
                                    </div>
                                  ))}
                                </div>
                              </Col>
                              <Col xs={12} md={2}>
                                <Badge bg={getStatusColor(order.status)}>{order.status}</Badge>
                              </Col>
                              <Col xs={12} md={2}>
                                <strong className="text-success">₪{order.total}</strong>
                              </Col>
                              <Col xs={12} md={1}>
                                <Button variant="outline-primary" size="sm">
                                  צפה
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
