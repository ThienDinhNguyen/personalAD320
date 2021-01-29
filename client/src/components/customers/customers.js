import React, { Component } from "react";
import "./customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch("/api/Customers")
      .then((res) => res.text())
      .then((Customers) => {
        return this.setState({ Customers }, () =>
          console.log("Customers fetched..", Customers)
        );
      });
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
      </div>
    );
  }
}

export default Customers;
