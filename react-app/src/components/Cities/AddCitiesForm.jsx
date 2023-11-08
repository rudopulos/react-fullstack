import React, { Component } from "react";
import Button from "../buttons/Button";
import PropTypes from "prop-types";

export default class AddCitiesForm extends Component {
  static propTypes = { onFormSubmit: PropTypes.func };

  state = {
    city: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);
  };

  handleChange = (evt) => {
    const { value } = evt.target;

    this.setState({ city: value });
  };

  render() {
    const { city } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Adding a city</h1>
        <label>
          <span>City Name</span>
          <input
            value={city}
            name="city"
            type="text"
            placeholder="City"
            onChange={this.handleChange}
            required
          />
        </label>

        <Button className={"mt-16"} type="submit">
          Add
        </Button>
      </form>
    );
  }
}
