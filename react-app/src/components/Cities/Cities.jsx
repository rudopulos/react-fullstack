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
    selectedItem: {
      id: 0,
      name: "",
    },
    list: [
      {
        id: 0,
        name: "San Francisco",
      },
      {
        id: 1,
        name: "New York",
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
      selectedItem,
    } = this.state;

    return (
      <section className="section">
        <h2>
          <Icon variant="pin" label="Cities" />
          <span>Cities</span>
        </h2>
        <div className={`${styles.itemsList}`}>{this.renderList(list)}</div>

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
                  value={selectedItem.name}
                  onChange={(e) =>
                    this.setState((prevState) => {
                      return {
                        ...prevState,
                        selectedItem: {
                          ...prevState.selectedItem,
                          name: e.target.value,
                        },
                      };
                    })
                  }
                ></input>
              </label>
              <Button action={() => this.handleEditItem(selectedItem)}>
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
              label: "City Removal",
            }}
          >
            <div>
              All materials and information about the city will be deleted
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
              <Button action={() => this.handleDeleteItem(selectedItem)}>
                Yes
              </Button>
            </div>
          </Modal>
        )}

        {isAddFormVisible && (
          <AddCitiesForm onFormSubmit={this.handleAddItem} />
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

  handleEditItem = (editedItem) => {
    const yourNextList = [...this.state.list];

    if (yourNextList.find((el) => el.name === editedItem.name)) {
      this.setState({
        errors: "A city with the same name already exists.",
      });

      return;
    }

    const item = yourNextList.find((el) => el.id === editedItem.id);
    item.name = editedItem.name;

    this.setState((prevState) => {
      return {
        ...prevState,
        errors: "",
        isEditModalOpen: false,
        list: yourNextList,
      };
    });
  };

  handleDeleteItem = (item) => {
    const yourNextList = this.state.list.filter((el) => el.id !== item.id);

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
        selectedItem: {
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
        selectedItem: {
          id: data.id,
          name: data.name,
        },
      };
    });
  };

  handleAddItem = (item) => {
    const list = this.state.list.sort((a, b) => a.id > b.id);

    if (list.find((el) => el.name === item.name)) {
      this.setState({
        errors: "A city with the same name already exists.",
      });

      return;
    }

    const newId = list.length > 0 ? list[list.length - 1].id + 1 : 0;

    const itemToAdd = {
      id: newId,
      name: item.name,
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

    return list.map((item) => (
      <div key={item.id} className={`box relative ${styles.listItem}`}>
        <span>{item.name}</span>
        <Dropdown
          onEdit={() => this.showEditModal(item)}
          onDelete={() => this.showDeleteModal(item)}
        />
      </div>
    ));
  }
}

export default Cities;
