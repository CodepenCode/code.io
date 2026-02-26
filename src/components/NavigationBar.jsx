import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth");
    setIsAuth(!!authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="custom-header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          MyApp
        </NavLink>

        <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)} >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}> Home </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}> About </NavLink>
          {!isAuth ? (<NavLink to="/login" className="login-btn" onClick={() => setOpen(false)} > Login </NavLink>
          ) : (<button className="login-btn" onClick={handleLogout} style={{ cursor: "pointer" }} > Logout </button>)}
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;