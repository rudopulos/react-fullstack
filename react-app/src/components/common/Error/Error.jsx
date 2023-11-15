import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./Error.module.css";

export default class Error extends Component {
  static propTypes = { message: PropTypes.string.isRequired };
  defaultProps = {
    message: "",
  };

  render() {
    const { message } = this.props;
    return <div className={styles.alert}>{message}</div>;
  }
}
