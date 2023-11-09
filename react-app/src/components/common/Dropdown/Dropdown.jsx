import React, { Component } from "react";
import PropTypes from "prop-types";
import { HiDotsVertical, HiPencil, HiTrash } from "react-icons/hi";
import styles from "./Dropdown.module.css";

export default class Dropdown extends Component {
  static propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  state = {
    isVisible: false,
  };

  render() {
    const { isVisible } = this.state;
    const { onEdit, onDelete } = this.props;

    return (
      <div>
        <span
          className={styles.dropdownToggle}
          onClick={() =>
            this.setState({
              isVisible: !isVisible,
            })
          }
        >
          {<HiDotsVertical />}
        </span>
        {isVisible && (
          <div className={styles.dropdownMenu}>
            <div
              className={styles.dropdownItem}
              onClick={() => {
                onEdit();
                this.setState({
                  isVisible: false,
                });
              }}
            >
              <HiPencil />
              Edit
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => {
                onDelete();
                this.setState({
                  isVisible: false,
                });
              }}
            >
              <HiTrash />
              Delete
            </div>
          </div>
        )}
      </div>
    );
  }
}
