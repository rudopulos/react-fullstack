import React, { Component } from "react";
import styles from "./Tutors.module.css";
import Icon from "../icons/Icon";
import AddTutor from "./AddTutor/AddTutor";
import Button from "../buttons/Button";

class Tutors extends Component {
  state = {
    searchTerm: "",
    isAddFormVisible: false,
    list: [
      {
        id: 0,
        firstName: "John",
        lastName: "Smith",
        telephone: "07123456",
        email: "johnsmith@company.com",
        city: "Paris",
        role: "Administrator",
      },
    ],
  };

  render() {
    const { isAddFormVisible, list, searchTerm } = this.state;
    const filteredList =
      searchTerm.length > 0
        ? list.filter((el) => el.firstName.includes(searchTerm))
        : list;

    return (
      <section className="section">
        <h1>
          <Icon variant="cat" label="Tutors" />
          <span>Tutors</span>
        </h1>
        <div className={`box ${styles.tutorsList}`}>
          {this.renderList(filteredList)}
        </div>

        {isAddFormVisible && <AddTutor onFormSubmit={this.handleAddTutor} />}
        <label>
          <span>Search</span>
          <input
            type="text"
            onChange={(evt) => {
              this.setState({ searchTerm: evt.target.value });
            }}
            value={this.state.searchTerm}
          />
        </label>

        <div className={"mt-16"}>
          <Button
            action={() =>
              this.setState({
                isAddFormVisible: true,
              })
            }
          >
            Add Tutor
          </Button>
        </div>
      </section>
    );
  }

  // handle add tutor
  handleAddTutor = (data) => {
    const newId =
      this.state.list.length > 0
        ? this.state.list[this.state.list.length - 1].id
        : 0;

    const tutorToAdd = {
      id: newId,
      firstName: data.name,
      lastName: data.surname,
      telephone: data.phone,
      email: data.email,
      city: data.city,
      role: "Member",
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

export default Tutors;
