import React, { Component } from "react";
import mapbox from "mapbox-gl";
import "./Map.css";

class Map extends Component {
  // only changes the style once
  componentDidMount() {
    const app = this.props.app;

    mapbox.accessToken =
      "pk.eyJ1IjoibGF1dnBhZGlsbGEiLCJhIjoiY2tmc2wyY2NpMG8wNTJzbnd4MDV0dHMzNyJ9.OCjKoT7Dye99z_mK3TjKug";
    // this only exists within componetnDidMount
    const map = new mapbox.Map({
      container: "map",
      style: app.state.style,
      center: [app.state.longitude, app.state.latitude],
      zoom: 12,
    });

    const navigationControl = new mapbox.NavigationControl();
    map.addControl(navigationControl);

    this.props.app.setState({
      map: map,
    });
  }

  // renders things it needs to change
  render() {
    const app = this.props.app;
    const map = app.state.map;

    if (map) {
      map.setStyle(app.state.style);
    }

    return <div id="map"></div>;
  }
}

export default Map;
