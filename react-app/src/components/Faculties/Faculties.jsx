import React, { Component } from "react";
import styles from "./Faculties.module.css";
import Icon from "../common/Icon/Icon";
import Button from "../common/Button/Button";
import AddFacultiesForm from "./AddFacultiesForm";
import Dropdown from "../common/Dropdown/Dropdown";
import Modal from "../common/Modal/Modal";
import ErrorAlert from "../common/ErrorAlert";
import AlternateButton from "../common/Button/AlternateButton";

const FACULTIES_KEY = "faculties";

class Faculties extends Component {
  state = {
    isAddFormVisible: false,
    isEditModalOpen: false,
    isDeleteModalOpen: false,
    errors: "",
    selectedItem: {
      id: 0,
      name: "",
    },
    list: [],
  };

  async componentDidMount() {
    const data = localStorage.getItem(FACULTIES_KEY);

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
      localStorage.setItem(FACULTIES_KEY, JSON.stringify(this.state.list));
    }
  }

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
          <Icon variant="robot" label="Faculties" />
          <span>Faculties</span>
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
              label: "Edit faculty information",
            }}
          >
            <form className={`form modal-form`}>
              <label>
                <span>Faculty</span>
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
              this.setState({ isDeleteModalOpen: false });
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
              <Button action={() => this.handleDeleteItem(selectedItem)}>
                Yes
              </Button>
            </div>
          </Modal>
        )}

        {isAddFormVisible && (
          <AddFacultiesForm onFormSubmit={this.handleAddItem} />
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
            Add Faculty
          </Button>
        </div>
      </section>
    );
  }

  handleEditItem = (editedItem) => {
    const yourNextList = [...this.state.list];

    if (yourNextList.find((el) => el.name === editedItem.name)) {
      this.setState({
        errors: "A faculty with the same name already exists.",
      });

      return;
    }

    const faculty = yourNextList.find((el) => el.id === editedItem.id);
    faculty.name = editedItem.name;
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
        errors: "A faculty with the same name already exists.",
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
        <div className="box box--no-items">There are no faculties added.</div>
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

export default Faculties;
