import React, { Component } from "react";
import styles from "./Faculties.module.css";
import Icon from "../icons/Icon";
import Button from "../buttons/Button";
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
        <h1>
          <Icon variant="robot" label="Faculties" />
          <span>Faculties</span>
        </h1>
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

    const tutorToAdd = {
      id: newId,
      name: data.faculty,
    };

    this.setState({
      list: [...this.state.list, tutorToAdd],
      isAddFormVisible: false,
    });
  };

  // Render the list of tutors
  renderList = (items) => {
    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <>
          <div key={el.id} className={styles.tutorsListItem}>
            <div>{name}</div>
            <div className={styles.address}>
              <span>{el.email}</span>
              <span>{el.telephone}</span>
              <span>{el.location}</span>
            </div>
            <div>{el.role}</div>
          </div>
        </>
      );
    });
  };
}

export default Faculties;
