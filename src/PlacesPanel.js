import React, { Component } from "react";
import PlaceItem from "./PlaceItem";
import "./Places.css";

class PlacesPanel extends Component {
  render() {
    const places = this.props.app.state.places;

    let placeItems = <div className="no-results">Nothing added yet</div>;
    if (places.length > 0) {
      placeItems = places.map((place) => {
        return <PlaceItem place={place}></PlaceItem>;
      });
    }

    return <div className="places">{placeItems}</div>;
  }
}

export default PlacesPanel;
