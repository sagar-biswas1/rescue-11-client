import React from "react";
import { Link } from "react-router-dom";

const Header = ({handleFilter}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="fw-bold fs-5 text-white mx-auto">
          NOTES_TRACKER
        </Link>

        <Link to="/login" className="fw-bold fs-5 text-white mx-auto">
          Login
        </Link>
        <form className="d-flex" onSubmit={handleFilter}>
          <input
            className="form-control me-2"
            type="search"
            name="searchText"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
