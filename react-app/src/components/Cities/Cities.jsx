import React, { Component } from "react";
import styles from "./Cities.module.css";
import Icon from "../icons/Icon";
import Button from "../buttons/Button";
import AddCitiesForm from "./AddCitiesForm";
import Dropdown from "./Dropdown";

class Cities extends Component {
  state = {
    isAddFormVisible: false,
    modal: {
      isOpen: false,
      content: <></>,
    },
    list: [
      {
        id: 0,
        name: "New York",
      },
      {
        id: 1,
        name: "San Francisco",
      },
    ],
  };

  render() {
    const { isAddFormVisible, list } = this.state;
    const { isOpen, modalContent } = this.state.modal;

    return (
      <section className="section">
        <code>{JSON.stringify(this.state)}</code>
        <h1>
          <Icon variant="pin" label="Cities" />
          <span>Cities</span>
        </h1>
        <div className={`${styles.citiesList}`}>
          {list.map((city) => (
            <div
              key={city.id}
              className={`box relative ${styles.citiesListItem}`}
            >
              <span>{city.name}</span>
              <Dropdown
                cityId={city.id}
                onEdit={() => this.handleEditCity(city)}
              />
            </div>
          ))}
        </div>
        {isOpen ? "True" : "False"}
        {isOpen && (
          <div className="modal">
            <div className="modal-content">Test {modalContent}</div>
          </div>
        )}

        {isAddFormVisible && (
          <AddCitiesForm onFormSubmit={this.handleAddCity} />
        )}

        <div className={"mt-16"}>
          <Button
            action={() =>
              this.setState({
                isAddFormVisible: true,
              })
            }
          >
            Add City
          </Button>
        </div>
      </section>
    );
  }

  handleEditCity = (data) => {
    console.log("Set modal open");
    this.setState({
      ...this.state,
      modal: {
        ...this.state.modal,
        isOpen: true,
        modalContent: (
          <form>
            Orasul editat are id-ul {data.id} si numele {data.name}{" "}
            <button
              onClick={() => {
                this.setState({
                  modal: {
                    isOpen: false,
                    modalContent: <></>,
                  },
                });
              }}
            >
              Close Modal
            </button>
          </form>
        ),
      },
    });
  };

  // handle add city
  handleAddCity = (data) => {
    const newId =
      this.state.list.length > 0
        ? this.state.list[this.state.list.length - 1].id
        : 0;

    const tutorToAdd = {
      id: newId,
      name: data.city,
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

export default Cities;
