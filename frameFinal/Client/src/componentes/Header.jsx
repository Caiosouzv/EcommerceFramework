import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>

          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;