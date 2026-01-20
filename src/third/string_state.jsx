import React, { Component } from "react";

class StringState extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: ""
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };

  render() {
    const { name, email, age } = this.state;

    return (
      <>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={this.handleNameChange}
        />

        <input
          type="text"
          placeholder="Enter Email"
          value={email} 
          onChange={this.handleEmailChange}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={this.handleAgeChange}
        />

        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Age: {age}</h2>
      </>
    );
  }
}

export default StringState;
