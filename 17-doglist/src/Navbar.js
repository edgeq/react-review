import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(dog => (
      <li key={dog.name}>
      <NavLink className="nav-link" exact to={`/dogs/${dog.name}`} >{dog.name}</NavLink>
      </li>
    ))
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mb-0 h1" to="/dogs">DogApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggel navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/dogs">Home</NavLink>
            </li>
              {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
