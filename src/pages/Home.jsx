import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* hero */}
      <div style={{ position: "relative", backgroundImage: "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px", overflow: "hidden", minHeight: "50vh", display: "flex", alignItems: "center", margin: "60px 0" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
        <Container className="text-center text-white" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-4">Build Something Amazing</h1>
          <p className="lead mb-4 px-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maiores numquam laboriosam?</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button as={Link} to="/dashboard" variant="light" size="lg" className="px-4 fw-semibold" > Explore Dashboard</Button>
            <Button as={Link} to="/about" variant="outline-light" size="lg" className="px-4 fw-semibold" > Learn More </Button>
          </div>
        </Container>
      </div>
      {/* card section */}
      <Container className="mb-5">
        <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <Card.Body>
                <div className="fs-1 mb-3 text-primary">🌟</div>
                <Card.Title className="fw-bold"> Lightning Fast </Card.Title>
                <Card.Text className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing. </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <Card.Body>
                <div className="fs-1 mb-3 text-success">👨‍💻</div>
                <Card.Title className="fw-bold"> Clean Design </Card.Title>
                <Card.Text className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic. </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <Card.Body>
                <div className="fs-1 mb-3 text-danger">🔰</div>
                <Card.Title className="fw-bold"> Secure & Reliable </Card.Title>
                <Card.Text className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;