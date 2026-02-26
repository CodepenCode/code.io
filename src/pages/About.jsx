import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <>

      <div style={{ position: "relative", backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px", overflow: "hidden" }} className="py-5 m-5 text-white" >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
        {/* hero section */}
        <Container className="text-center py-4" style={{ position: "relative", zIndex: 2 }} >
          <h1 className="display-5 fw-bold">About Our Company</h1>
          <p className="lead mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla commodi nesciunt illum. </p>
        </Container>
      </div>
      {/* mission */}
      <Container>
        <Row className="g-4 m-4">
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-4">
              <Card.Body>
                <h4 className="fw-bold text-primary mb-3">Our Mission</h4>
                <p className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque temporibus nostrum quisquam consectetur, quam est! </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm h-100 p-4">
              {/* vision */}
              <Card.Body>
                <h4 className="fw-bold text-success mb-3">Our Vision</h4>
                <p className="text-muted"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio itaque modi rem esse? </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* why to choose */}
        <div className="text-center mb-4 mt-5"> <h2 className="fw-bold" style={{ color: 'cornflowerblue' }}>Why Choose Us?</h2> </div>
        <Row className="g-4 m-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center p-4 h-100">
              <h5 className="fw-bold">Professional Team</h5>
              <p className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center p-4 h-100">
              <h5 className="fw-bold">Customer Focused</h5>
              <p className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm text-center p-4 h-100">
              <h5 className="fw-bold">Quality Assurance</h5>
              <p className="text-muted"> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;