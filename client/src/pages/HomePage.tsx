import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import FloatingBalloons from '../components/FloatingBalloons';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const categories = useAppSelector((state) => state.products.categories);

  // תמונות לקטגוריות
  const categoryImages: Record<string, string> = {
    'ימי הולדת': 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
    'אהבה': 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop',
    'תינוקות': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop',
    'מתנות לגבר': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop',
    'מתנות לעובדים': 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop',
    'מארזי פרימיום': 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop',
    'בלונים': 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
  };

  // תמונות למוצרים מומלצים
  const featuredProducts = [
    {
      id: 1,
      name: 'מארז שוקולד פרימיום',
      price: 199,
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'סלסלת פירות מעוצבת',
      price: 249,
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'מארז יין ופרלינים',
      price: 299,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'קופסת מתנה מעוצבת',
      price: 179,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop',
    },
  ];

  // מוצרים חדשים
  const newProducts = [
    {
      id: 5,
      name: 'מארז קפה וממתקים',
      price: 159,
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'סלסלת תה וביסקוויטים',
      price: 189,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    },
    {
      id: 7,
      name: 'מארז ספא ביתי',
      price: 229,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop',
    },
    {
      id: 8,
      name: 'קופסת מתנה לתינוק',
      price: 269,
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="home-page">
      <Navbar />

      <Container>
        {/* Hero Banner */}
        <div className="hero-banner text-center">
          <FloatingBalloons />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="display-4">Welcome to GiftBox</h2>
            <p className="lead">מארזי מתנות מיוחדים שיגרמו לכם לחייך 🎁</p>
            <Button variant="light" size="lg" className="mt-2">
              התחילו לקנות
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="חפש מתנות..."
          />
        </div>

        {/* Categories */}
        <section className="categories">
          <h3>קטגוריות</h3>
          <Row>
            {categories.map((category) => (
              <Col key={category} xs={6} sm={6} md={4} lg={4} className="mb-3">
                <Link
                  to={`/category/${category}`}
                  className="text-decoration-none"
                >
                  <Card className="h-100 hover-shadow">
                    <Card.Img
                      variant="top"
                      src={categoryImages[category] || 'https://via.placeholder.com/400x300?text=קטגוריה'}
                      alt={category}
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="mb-0">{category}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <h3>מוצרים מומלצים</h3>
          <Row>
            {featuredProducts.map((product) => (
              <Col key={product.id} xs={6} sm={6} md={4} lg={3} className="mb-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="text-primary fw-bold">₪{product.price}</Card.Text>
                    <Button variant="primary" className="w-100 mt-auto">
                      הוסף לעגלה
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* New Products Section */}
        <section className="new-products">
          <h3>חדש באתר</h3>
          <Row>
            {newProducts.map((product) => (
              <Col key={product.id} xs={6} sm={6} md={4} lg={3} className="mb-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="text-primary fw-bold">₪{product.price}</Card.Text>
                    <Button variant="outline-primary" className="w-100 mt-auto">
                      צפה במוצר
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
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
                <li>
                  <Link to="/profile" className="text-white">
                    חשבון
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

export default HomePage;
