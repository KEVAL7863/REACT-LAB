import React, { Component } from "react";
import "./card.css";

class CardComponent extends Component {
  render() {
    return (
      <>
        <div className="user-card">
          <img
          src="https://th.bing.com/th/id/OIP.gsOX176nASMd0spiytBoqQHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="User"
          />
          <button>follow
          </button>
        </div>
      </>
    );
  }
}

export default CardComponent;
