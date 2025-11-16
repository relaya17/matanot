import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import Navbar from '../components/Navbar';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = slug || '';
  const products = getProductsByCategory(categoryName);

  return (
    <div className="category-page">
      <Navbar />

      <Container className="py-4">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">בית</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {categoryName}
            </li>
          </ol>
        </nav>

        {/* Category Header */}
        <Row className="mb-4">
          <Col>
            <h2 className="display-5 mb-2">{categoryName}</h2>
            <p className="lead text-muted">
              {products.length} מוצרים זמינים
            </p>
          </Col>
        </Row>

        {/* Products Grid */}
        {products.length > 0 ? (
          <Row>
            {products.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <div style={{ position: 'relative' }}>
                    <Card.Img
                      variant="top"
                      src={product.images[0]}
                      alt={product.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    {product.tags && product.tags.length > 0 && (
                      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        {product.tags.map((tag) => (
                          <Badge
                            key={tag}
                            bg={tag === 'מומלץ' ? 'success' : tag === 'חדש' ? 'info' : 'warning'}
                            className="me-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-2" style={{ fontSize: '1rem' }}>
                      {product.title}
                    </Card.Title>
                    <Card.Text
                      className="text-muted small mb-3"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {product.description}
                    </Card.Text>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="h5 mb-0 text-primary">₪{product.price}</span>
                        {product.inventory && product.inventory < 10 && (
                          <small className="text-danger">נשארו {product.inventory}</small>
                        )}
                      </div>
                      <Link to={`/product/${product.slug}`} className="w-100">
                        <Button variant="primary" className="w-100">
                          צפה במוצר
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            <Col className="text-center py-5">
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📦</div>
              <h3>אין מוצרים בקטגוריה זו כרגע</h3>
              <p className="text-muted">נסה לחפש בקטגוריות אחרות</p>
              <Link to="/">
                <Button variant="primary" size="lg">
                  חזרה לדף הבית
                </Button>
              </Link>
            </Col>
          </Row>
        )}

        {/* Back Button */}
        <Row className="mt-4">
          <Col>
            <Link to="/">
              <Button variant="outline-secondary">
                ← חזרה לכל הקטגוריות
              </Button>
            </Link>
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

export default CategoryPage;
