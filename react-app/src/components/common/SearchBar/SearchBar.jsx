import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./SearchBar.module.css";
import { HiSearch } from "react-icons/hi";

export default class SearchBar extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  render() {
    const { handleChange, searchTerm } = this.props;

    return (
      <div className={styles.search}>
        <input
          type="text"
          placeholder={"Search for tutor..."}
          onChange={handleChange}
          value={searchTerm}
        />
        <span className={styles.icon}>
          <HiSearch />
        </span>
      </div>
    );
  }
}
