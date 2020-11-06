import React, { Component } from "react";
import Map from "./Map";
import Toggler from "./Toggler";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // hold some stuff that might change
    this.state = {
      map: null, // by default map hasn't loaded
      latitude: 40.7128,
      longitude: -74.006,
      style: "mapbox://styles/mapbox/navigation-guidance-day-v4",
    };
  }

  render() {
    return (
      <div className="App">
        <Toggler app={this}></Toggler>
        {/* in the map, tell it that something called app is equal to 
        this whole thing that includes style/latitude etc */}
        <Map app={this}></Map>
      </div>
    );
  }
}

export default App;
