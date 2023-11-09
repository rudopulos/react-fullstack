import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./ErrorAlert.module.css";

export default class ErrorAlert extends Component {
  static propTypes = { errors: PropTypes.string.isRequired };

  render() {
    const { errors } = this.props;

    if (errors.length === 0) {
      return;
    }

    return <div className={styles.alert}>{errors}</div>;
  }
}
