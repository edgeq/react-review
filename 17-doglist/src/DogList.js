import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    // const dogs = this.state.doglist.map(d => (
    //   <div>d.name</div>
    // ));
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">List go here</h1>
        <div className="row">
          {this.props.dogs.map(d => (
            <div className="Dog col-md-6 col-lg-4 text-center" key={d.name}>
              <img src={d.src} alt={d.name} />
              <h3>
                <Link to={`/dogs/${d.name}`}>{d.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
