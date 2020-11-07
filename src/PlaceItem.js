import React, { Component } from "react";

class PlaceItem extends Component {
  render() {
    return <div className="place-item">{this.props.place.name}</div>;
  }
}

export default PlaceItem;
