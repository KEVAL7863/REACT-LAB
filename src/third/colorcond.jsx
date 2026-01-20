import React, { Component } from "react";

class Colorcond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      bgColor: "white",
    };
  }

  toggle = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  changeColor = (color) => {
    this.setState({ bgColor: color });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.bgColor,
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <button onClick={this.toggle}>
          {this.state.isOn ? "ON" : "OFF"}
        </button>

        <p>
          Status: {this.state.isOn ? "Active" : "Inactive"}
        </p>

        <hr />

        <h3>Change Background Color</h3>

        <button onClick={() => this.changeColor("green")}>
          Green
        </button>

        <button onClick={() => this.changeColor("blue")}>
          Blue
        </button>

        <button onClick={() => this.changeColor("yellow")}>
          Yellow
        </button>

        <button onClick={() => this.changeColor("red")}>
          Red
        </button>
      </div>
    );
  }
}

export default Colorcond;
