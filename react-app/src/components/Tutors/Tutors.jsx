import React, { Component } from "react";
import styles from "./Tutors.module.css";
import Icon from "../common/Icon/Icon";
import AddTutor from "./AddTutor/AddTutor";
import Button from "../common/Button/Button";
import SearchBar from "../common/SearchBar/SearchBar";

const TUTORS_KEY = "tutors";

class Tutors extends Component {
  state = {
    searchTerm: "",
    isAddFormVisible: false,
    list: [],
  };

  async componentDidMount() {
    const data = localStorage.getItem(TUTORS_KEY);

    try {
      if (data) {
        this.setState({
          list: JSON.parse(data),
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState?.list.length !== this.state.list) {
      localStorage.setItem(TUTORS_KEY, JSON.stringify(this.state.list));
    }
  }

  render() {
    const { isAddFormVisible, list, searchTerm } = this.state;
    const filteredList =
      searchTerm.length > 0
        ? list.filter((el) => el.firstName.includes(searchTerm))
        : list;

    return (
      <section className="section">
        <h2>
          <Icon variant="cat" label="Tutors" />
          <span>Tutors</span>
        </h2>
        <div className={`box ${styles.tutorsList}`}>
          {this.renderList(filteredList)}
        </div>

        {isAddFormVisible && <AddTutor onFormSubmit={this.handleAddTutor} />}

        <SearchBar
          handleChange={(evt) => {
            this.setState({ searchTerm: evt.target.value });
          }}
          searchTerm={searchTerm}
        />

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

    this.setState((prevState) => {
      return {
        list: [...prevState.list, tutorToAdd],
        isAddFormVisible: false,
      };
    });
  };

  // Render the list of tutors
  renderList = (items) => {
    console.dir(items);
    if (!items || !Array.isArray(items)) {
      return <>Loading...</>;
    }

    if (items.length === 0) {
      const hasSearchTerm = this.state.searchTerm.length > 0;

      return hasSearchTerm ? (
        <div>No tutors matching with this name have been found.</div>
      ) : (
        <div>There are no tutors.</div>
      );
    }

    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{name}</div>
          <div className={styles.address}>
            <span>{el.email}</span>
            <span>{el.telephone}</span>
            <span>{el.location}</span>
          </div>
          <div>{el.role}</div>
        </div>
      );
    });
  };
}

export default Tutors;
