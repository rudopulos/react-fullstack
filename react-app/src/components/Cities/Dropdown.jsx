import React, { Component } from "react";
import { HiDotsVertical, HiPencil, HiTrash } from "react-icons/hi";

export default class Dropdown extends Component {
  state = {
    isVisible: false,
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <span
          className="dropdown-toggle"
          onClick={() =>
            this.setState({
              isVisible: !isVisible,
            })
          }
        >
          {<HiDotsVertical />}
        </span>
        {isVisible && (
          <div className="dropdown-options">
            <div
              onClick={() => {
                console.log("Test");
                this.props.onEdit();
              }}
            >
              <HiPencil />
              Edit
            </div>
            <div>
              <HiTrash onClick={() => {}} /> Delete
            </div>
          </div>
        )}
      </div>
    );
  }
}
