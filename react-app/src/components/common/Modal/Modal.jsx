import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./Modal.module.css";
import { HiX } from "react-icons/hi";

export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    header: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { isOpen, handleClose, header, children } = this.props;

    if (!isOpen) {
      return;
    }

    return (
      <div className={styles.overlay}>
        <dialog className={styles.modal}>
          <header className={`${styles.header} relative`}>
            <button
              className={styles.closeBtn}
              onClick={() => {
                handleClose();
              }}
            >
              <HiX />
            </button>
          </header>
          <main className={styles.content}>
            <h1 className={styles.title}>
              {header.icon}
              {header.label}
            </h1>
            {children}
          </main>
        </dialog>
      </div>
    );
  }
}
