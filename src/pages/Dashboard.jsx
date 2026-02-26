import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import '../App.css'
import EmployeeTable from '../components/table.jsx';
const Dashboard = () => {
  return (
    <Container fluid>
      <div className="mb-4 mt-5">
        {/* dashboard */}
        <h2 className="fw-bold">Dashboard Overview</h2>
        <p className="text-muted">
          Welcome, Admin Here's what's happening today.
        </p>
      </div>

      <Row className="g-4 mb-5">
        <Col md={4}>
        {/* cards */}
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted">Total Users</h6>
                <h3 className="fw-bold">120</h3>
              </div>
              <div className="fs-1 text-primary">👨🏻‍💼</div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted">Total Orders</h6>
                <h3 className="fw-bold">75</h3>
              </div>
              <div className="fs-1 text-success">🛒🛍️</div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted">Revenue</h6>
                <h3 className="fw-bold">$5,000</h3>
              </div>
              <div className="fs-1 text-danger">📊</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* table */}
      <EmployeeTable />
    </Container>
  );
};

export default Dashboard;