import React, { Component } from "react";
import styles from "./Faculties.module.css";
import Icon from "../common/Icon/Icon";
import Button from "../common/Button/Button";
import { HiDotsVertical } from "react-icons/hi";
import AddFacultiesForm from "./AddFacultiesForm";

class Faculties extends Component {
  state = {
    isAddFormVisible: false,
    list: [
      {
        id: 0,
        name: "Faculty of computer science",
      },
      {
        id: 1,
        name: "Faculty of robotics",
      },
    ],
  };

  render() {
    const { isAddFormVisible, list } = this.state;

    return (
      <section className="section">
        <h2>
          <Icon variant="robot" label="Faculties" />
          <span>Faculties</span>
        </h2>
        <div className={`${styles.facultiesList}`}>
          {list.map((item) => (
            <div key={item.id} className={`box ${styles.facultiesListItem}`}>
              <span>{item.name}</span>
              <span>{<HiDotsVertical />}</span>
            </div>
          ))}
        </div>

        {isAddFormVisible && (
          <AddFacultiesForm onFormSubmit={this.handleAddItem} />
        )}

        <div className={"mt-16"}>
          <Button
            action={() =>
              this.setState({
                isAddFormVisible: true,
              })
            }
          >
            Add Faculty
          </Button>
        </div>
      </section>
    );
  }

  // handle add item
  handleAddItem = (data) => {
    const newId =
      this.state.list.length > 0
        ? this.state.list[this.state.list.length - 1].id
        : 0;

    const itemToAdd = {
      id: newId,
      name: data.faculty,
    };

    this.setState((prevState) => {
      return {
        list: [...prevState.list, itemToAdd],
        isAddFormVisible: false,
      };
    });
  };
}

export default Faculties;
