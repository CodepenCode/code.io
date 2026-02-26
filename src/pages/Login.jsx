import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    username: "",
    password: "",
  });

  const [generalError, setGeneralError] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   let errors = {
  //     username: "",
  //     password: "",
  //   };

  //   let hasError = false;

  //   if (!username.trim()) {
  //     errors.username = "Username is required";
  //     hasError = true;
  //   }

  //   if (!password.trim()) {
  //     errors.password = "Password is required";
  //     hasError = true;
  //   }

  //   setFieldErrors(errors);

  //   if (hasError) return;

  //   if (username === "admin" && password === "admin123") {
  //     localStorage.setItem("isAuth", "true");
  //     setGeneralError("");
  //     navigate("/dashboard");
  //   } else {
  //     setGeneralError("Username or password did not match");
  //   }
  // };

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  //   setFieldErrors({ ...fieldErrors, username: "" });
  //   setGeneralError("");
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   setFieldErrors({ ...fieldErrors, password: "" });
  //   setGeneralError("");
  // };

  // from starting
  
  // const handleUsernameChange = (e) => {
  //   const value = e.target.value;
  //   setUsername(value);
  //   setFieldErrors((prev) => ({ ...prev, username: value.trim() ? "" : "Username is required", }));
  //   setGeneralError("");
  // };
  // 

  // const handlePasswordChange = (e) => { const value = e.target.value; 
  //   setPassword(value); 
  //   setFieldErrors((prev) => ({ ...prev, password: value.trim() ? "" : "Password is required", })); 
  //   setGeneralError(""); 
  // };


  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let errors = {
      username: "",
      password: "",
    };

    let hasError = false;

    if (!username.trim()) {
      errors.username = "Username is required";
      hasError = true;
    }

    if (!password.trim()) {
      errors.password = "Password is required";
      hasError = true;
    }

    setFieldErrors(errors);

    if (hasError) return;

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuth", "true");
      setGeneralError("");
      navigate("/dashboard");
    } else {
      setGeneralError("Username or password did not match");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (isSubmitted) {
      setFieldErrors((prev) => ({
        ...prev,
        username: value.trim() ? "" : "Username is required",
      }));
    }

    setGeneralError("");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (isSubmitted) {
      setFieldErrors((prev) => ({
        ...prev,
        password: value.trim() ? "" : "Password is required",
      }));
    }

    setGeneralError("");
  };
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }} >
      <Card className="shadow-lg border-0 overflow-hidden text-white" style={{ width: "100%", maxWidth: "420px", borderRadius: "15px", backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />

        <Card.Body style={{ position: "relative", zIndex: 2 }} className="p-4" >
          <div className="text-center mb-4">
            <h3 className="fw-bold">Welcome Back</h3>
            <small>Login to continue</small>
          </div>

          {/* Main Error */}
          <div className={`error-box ${generalError ? "show" : ""}`}>
            {generalError}
          </div>

          <Form onSubmit={handleLogin}>
            {/* Username */}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} className={fieldErrors.username ? "input-error" : ""} />
              <div className={`field-error ${fieldErrors.username ? "show" : ""}`}>
                {fieldErrors.username}
              </div>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} className={fieldErrors.password ? "input-error" : ""} />
              <div className={`field-error ${fieldErrors.password ? "show" : ""}`}>
                {fieldErrors.password}
              </div>
            </Form.Group>

            <Button type="submit" className="w-100 mt-2" style={{ background: "linear-gradient(90deg, #1e90b6, #4e73df)", border: "none", }} > Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;