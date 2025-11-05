import React, { Component } from "react";

class FoodItem extends Component {
  render() {
    const { title, price, img, desc } = this.props.item;

    // string truncate
    const maxString = 100;
    const shortDesc =
      desc.length > maxString ? desc.substring(0, maxString) + "..." : desc;

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className="food-desc">{shortDesc}</div>
      </div>
    );
  }
}

export default FoodItem;
