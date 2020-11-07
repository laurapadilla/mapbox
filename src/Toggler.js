import React, { Component } from "react";
import "./Toggler.css";

class Toggler extends Component {
  setLayer(url) {
    this.props.app.setState({
      style: url,
    });
  }

  render() {
    const styles = [
      {
        name: "Satellite",
        url: "mapbox://styles/mapbox/satellite-streets-v11",
      },
      {
        name: "Night",
        url: "mapbox://styles/mapbox/navigation-guidance-night-v4",
      },
      {
        name: "Day",
        url: "mapbox://styles/mapbox/navigation-guidance-day-v4",
      },
    ];

    const buttons = styles.map((style) => {
      let className = "";

      if (style.url === this.props.app.state.style) {
        className = "selected";
      }

      return (
        <button className={className} onClick={() => this.setLayer(style.url)}>
          {style.name}
        </button>
      );
    });

    return <div className="toggler">{buttons}</div>;
  }
}

export default Toggler;
