import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/notFound.css'
const NotFound = () => {
  return (
    // <div
    //   className="d-flex align-items-center justify-content-center"
    //   style={{
    //     minHeight: "80vh",
    //     background: "linear-gradient(135deg, #4e73df, #1cc88a)",
    //   }}
    // >
    //   <Container className="text-center text-white">
    //     <h1
    //       style={{
    //         fontSize: "120px",
    //         fontWeight: "bold",
    //         letterSpacing: "5px",
    //       }}
    //     >
    //       404
    //     </h1>

    //     <h3 className="mb-3">Oops! Page Not Found</h3>

    //     <p className="mb-4">
    //       The page you are looking for might have been removed,
    //       had its name changed, or is temporarily unavailable.
    //     </p>

    //     <Button
    //       as={Link}
    //       to="/"
    //       size="lg"
    //       style={{
    //         backgroundColor: "#fff",
    //         color: "#4e73df",
    //         border: "none",
    //         padding: "10px 30px",
    //         fontWeight: "600",
    //         borderRadius: "30px",
    //       }}
    //     >
    //       Go Back Home
    //     </Button>
    //   </Container>
    // </div>
    <div className="main">
      <div className="swatch-wrapper">

        <div className="pantone-card card-left">
          <div className="color-block" style={{ backgroundColor: '#E76F51' }}>
            <div className="eyes-wrapper">
              <div className="eye bored-eye">
                <div className="pupil"></div>
                <div className="eyelid"></div>
              </div>
              <div className="eye bored-eye">
                <div className="pupil"></div>
                <div className="eyelid"></div>
              </div>
            </div>
          </div>
          <div className="text-block">
            <h1>ERROR 500</h1>
            <p>Server Error</p>
            <p className="footer-text px-4 fw-semibold"><Link to="/">Back Home</Link></p>
          </div>
        </div>

        <div className="pantone-card card-right">
          <div className="color-block" style={{ backgroundColor: '#E9C46A' }}>
            <div className="eyes-wrapper">
              <div className="eye crazy-eye">
                <div className="pupil small"></div>
              </div>
              <div className="eye crazy-eye">
                <div className="pupil big"></div>
              </div>
            </div>
          </div>
          <div className="text-block">
            <h1>WARNING</h1>
            <p>Invalid Request</p>
            <p className="footer-text px-4 fw-semibold"><Link to="/">Back Home</Link></p>
          </div>
        </div>

        <div className="pantone-card main-card">
          <div className="color-block" style={{ backgroundColor: "#3F62A0" }}>
            <div className="eyes-wrapper">
              <div className="eye interactive-eye">
                <div className="pupil"></div>
              </div>
              <div className="eye interactive-eye">
                <div className="pupil"></div>
              </div>
            </div>
          </div>
          <div className="text-block">
            <h1>ERROR 404</h1>
            <p>Not Found</p>
            <p as={Link} to="/dashboard" variant="light" size="lg"></p>
            <p className="footer-text px-4 fw-semibold"><Link to="/">Back Home</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;