import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    // what is the default thing that's happening with search
    super(props);

    this.state = {
      value: "",
      isLoading: false,
    };

    // bind handleChange to whole component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    // don't go to next page
    event.preventDefault();

    const accessToken =
      "pk.eyJ1IjoibGF1dnBhZGlsbGEiLCJhIjoiY2tmc2wyY2NpMG8wNTJzbnd4MDV0dHMzNyJ9.OCjKoT7Dye99z_mK3TjKug";

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

    // get old places
    const places = this.props.app.state.places;

    // adding old places on submit
    places.push({
      name: this.state.value,
      latutide: 40,
      longitude: -72,
    });

    this.props.app.setState({
      places: places,
    });

    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Add place..."
        />
      </form>
    );
  }
}

export default Search;
