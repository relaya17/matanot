import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/slices/cartSlice';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [note, setNote] = useState('');

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>מוצר לא נמצא</h2>
        <Link to="/">
          <Button variant="primary">חזרה לדף הבית</Button>
        </Link>
      </Container>
    );
  }

  const handleAddToCart = () => {
    dispatch(addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity,
      selectedOptions,
      note: note || undefined,
    }));
    alert('המוצר נוסף לעגלה!');
  };

  const handleOptionChange = (optionId: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionId]: value }));
  };

  return (
    <div className="product-page">
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
              <Link to="/cart" className="btn btn-light btn-sm me-2">
                🛒 <span className="d-none d-sm-inline">עגלה</span>
              </Link>
              <Link to="/profile" className="btn btn-outline-light btn-sm">
                👤 <span className="d-none d-sm-inline">חשבון</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className="py-4">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">בית</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/category/${product.categories[0]}`}>
                {product.categories[0]}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        <Row>
          {/* Product Image */}
          <Col xs={12} md={6} className="mb-4">
            <Card className="border-0 shadow">
              <Card.Img
                src={product.images[0]}
                alt={product.title}
                style={{ borderRadius: '12px', height: '400px', objectFit: 'cover' }}
              />
            </Card>
            {product.tags && product.tags.length > 0 && (
              <div className="mt-3">
                {product.tags.map((tag) => (
                  <Badge
                    key={tag}
                    bg={tag === 'מומלץ' ? 'success' : tag === 'חדש' ? 'info' : 'warning'}
                    className="me-2"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </Col>

          {/* Product Details */}
          <Col xs={12} md={6}>
            <Card className="border-0 shadow p-4">
              <h1 className="mb-3">{product.title}</h1>
              
              <div className="mb-4">
                <h2 className="text-primary mb-0">₪{product.price}</h2>
                {product.inventory && product.inventory < 10 && (
                  <small className="text-danger">נשארו רק {product.inventory} במלאי!</small>
                )}
              </div>

              <p className="lead mb-4">{product.description}</p>

              {/* Options */}
              {product.options && product.options.length > 0 && (
                <div className="mb-4">
                  {product.options.map((option) => (
                    <Form.Group key={option.id} className="mb-3">
                      <Form.Label className="fw-bold">{option.name}</Form.Label>
                      <Form.Select
                        value={selectedOptions[option.id] || ''}
                        onChange={(e) => handleOptionChange(option.id, e.target.value)}
                      >
                        <option value="">בחר {option.name}</option>
                        {option.values.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">כמות</Form.Label>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mx-2 text-center"
                    style={{ width: '80px' }}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </Form.Group>

              {/* Note */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">הערה / ברכה אישית (אופציונלי)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="הוסף ברכה אישית למארז..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </Form.Group>

              {/* Add to Cart Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-100 mb-3"
                onClick={handleAddToCart}
              >
                🛒 הוסף לעגלה - ₪{product.price * quantity}
              </Button>

              <Link to={`/category/${product.categories[0]}`} className="w-100">
                <Button
                  variant="outline-secondary"
                  size="lg"
                  className="w-100"
                >
                  חזרה לקטגוריה
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>

        {/* Product Info */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0 shadow p-4">
              <h3 className="mb-3">פרטי המוצר</h3>
              <Row>
                <Col md={6}>
                  <p><strong>קטגוריות:</strong> {product.categories.join(', ')}</p>
                  <p><strong>מק"ט:</strong> {product.id}</p>
                </Col>
                <Col md={6}>
                  <p><strong>זמינות:</strong> {product.inventory ? `${product.inventory} יחידות` : 'במלאי'}</p>
                  <p><strong>משלוח:</strong> 3-5 ימי עסקים</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h5>GiftBox</h5>
              <p>מתנות מושלמות לכל אירוע</p>
            </Col>
            <Col xs={6} md={4} className="mb-3 mb-md-0">
              <h5>קישורים</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-white">
                    בית
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-white">
                    עגלה
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h5>משפטי</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    תקנון שימוש
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    מדיניות פרטיות
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <small>© 2025 GiftBox. כל הזכויות שמורות.</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default ProductPage;
