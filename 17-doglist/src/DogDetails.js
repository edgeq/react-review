import React, { Component } from "react";
import { Link } from 'react-router-dom';

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="container">
        <div className="DogDetails row justify-content-center mt-5">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img className="card-img-top" src={dog.src} alt={dog.name} />
              <div className="card-body">
                <h2 className="dog-title">Name: {dog.name}</h2>
                <h4 className="card-subtitle text-muted">Age: {dog.age} years old</h4>
              </div>
              <ul className="list-group list-group-flush">
                {dog.facts.map((fact, i) => (
                  <li className="list-group-item" key={i}>{fact}</li>
                ))}
              </ul>
              <div className="card-body">
                <Link to='/dogs' className="btn btn-info">GO BACK</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;
