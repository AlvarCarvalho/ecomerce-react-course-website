import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-brand">
          Kuenda-Shop
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </div>

        <div className="navbar-auth">
          <div className="navbar-auth-links"></div>
          <Link to="/auth" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/auth" className="btn btn-primary">
            Singup
          </Link>
        </div>

      </div>
    </nav>
  );
}
