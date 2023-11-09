import React, { Component } from "react";
import styles from "./Cities.module.css";
import Icon from "../common/Icon/Icon";
import Button from "../common/Button/Button";
import AddCitiesForm from "./AddCitiesForm";
import Dropdown from "../common/Dropdown/Dropdown";
import Modal from "../common/Modal/Modal";
import ErrorAlert from "../common/ErrorAlert";
import AlternateButton from "../common/Button/AlternateButton";

class Cities extends Component {
  state = {
    isAddFormVisible: false,
    isEditModalOpen: false,
    isDeleteModalOpen: false,
    errors: "",
    selectedCity: {
      id: 0,
      name: "",
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
    const {
      isAddFormVisible,
      list,
      errors,
      isEditModalOpen,
      isDeleteModalOpen,
      selectedCity,
    } = this.state;

    return (
      <section className="section">
        <h2>
          <Icon variant="pin" label="Cities" />
          <span>Cities</span>
        </h2>
        <div className={`${styles.citiesList}`}>{this.renderList(list)}</div>

        {isEditModalOpen && (
          <Modal
            isOpen={isEditModalOpen}
            handleClose={() => {
              this.setState({ isEditModalOpen: false });
            }}
            header={{
              icon: <Icon variant={"pencil"} size={40} />,
              label: "Edit city information",
            }}
          >
            <form className={`form modal-form`}>
              <label>
                <span>City</span>
                <input
                  type="text"
                  required
                  value={selectedCity.name}
                  onChange={(e) =>
                    this.setState((prevState) => {
                      return {
                        ...prevState,
                        selectedCity: {
                          ...prevState.selectedCity,
                          name: e.target.value,
                        },
                      };
                    })
                  }
                ></input>
              </label>
              <Button action={() => this.handleEditCity(selectedCity)}>
                SAVE
              </Button>
            </form>
          </Modal>
        )}
        {isDeleteModalOpen && (
          <Modal
            isOpen={isDeleteModalOpen}
            handleClose={() => {
              this.setState({ isEditModalOpen: false });
            }}
            header={{
              icon: <Icon variant={"handpointing"} size={40} />,
              label: "Faculty Removal",
            }}
          >
            <div>
              All materials and information about the faculty will be deleted
            </div>
            <div className={styles.deleteModalControls}>
              <AlternateButton
                action={() =>
                  this.setState((prevState) => {
                    return {
                      ...prevState,
                      isDeleteModalOpen: false,
                    };
                  })
                }
              >
                No
              </AlternateButton>
              <Button action={() => this.handleDeleteCity(selectedCity)}>
                Yes
              </Button>
            </div>
          </Modal>
        )}

        {isAddFormVisible && (
          <AddCitiesForm onFormSubmit={this.handleAddCity} />
        )}

        {errors.length > 0 && <ErrorAlert errors={errors} />}

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

  handleEditCity = (editedCity) => {
    const yourNextList = [...this.state.list];

    if (yourNextList.find((el) => el.name === editedCity.name)) {
      this.setState({
        errors: "A city with the same name already exists.",
      });

      return;
    }

    const city = yourNextList.find((el) => el.id === editedCity.id);
    city.name = editedCity.name;
    this.setState((prevState) => {
      return {
        ...prevState,
        errors: "",
        isEditModalOpen: false,
        list: yourNextList,
      };
    });
  };

  handleDeleteCity = (selectedCity) => {
    const yourNextList = this.state.list.filter(
      (el) => el.id !== selectedCity.id
    );

    this.setState((prevState) => {
      return {
        ...prevState,
        errors: "",
        isDeleteModalOpen: false,
        list: yourNextList,
      };
    });
  };

  showEditModal = (data) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isEditModalOpen: true,
        selectedCity: {
          id: data.id,
          name: data.name,
        },
      };
    });
  };

  showDeleteModal = (data) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isDeleteModalOpen: true,
        selectedCity: {
          id: data.id,
          name: data.name,
        },
      };
    });
  };

  // handle add city
  handleAddCity = (addedCity) => {
    const list = this.state.list.sort((a, b) => a.id > b.id);

    if (list.find((el) => el.name === addedCity.name)) {
      this.setState({
        errors: "A city with the same name already exists.",
      });

      return;
    }

    const newId = list.length > 0 ? list[list.length - 1].id : 0;

    const itemToAdd = {
      id: newId,
      name: addedCity.name,
    };

    this.setState((prevState) => {
      return {
        errors: "",
        list: [...prevState.list, itemToAdd],
        isAddFormVisible: false,
      };
    });
  };

  renderList(list) {
    if (!list || list.length === 0) {
      return (
        <div className="box box--no-items">There are no cities added.</div>
      );
    }

    return list.map((city) => (
      <div key={city.id} className={`box relative ${styles.citiesListItem}`}>
        <span>{city.name}</span>
        <Dropdown
          cityId={city.id}
          onEdit={() => this.showEditModal(city)}
          onDelete={() => this.showDeleteModal(city)}
        />
      </div>
    ));
  }
}

export default Cities;
