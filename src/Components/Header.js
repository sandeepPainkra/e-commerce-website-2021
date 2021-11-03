import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          SHOPPINGWEB
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="dropdown">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <FaShoppingCart />
            <span className="badge">0</span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/cart" className="dropdown-item" href="#">
              cart is empty
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
