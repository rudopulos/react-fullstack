import React, { Component } from "react";
import styles from "./AddTutor.module.css";
import Button from "../../buttons/Button";

export default class AddTutor extends Component {
  handleSubmit = () => {
    console.log("Am adaugat un profesor");
    this.props.hideForm();
  };

  render() {
    return (
      <form className={styles.addTutorForm}>
        <h1>Add Tutor</h1>
        <input type="text" placeholder="Surname" required />
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="City" required />

        <Button className={"mt-16"} action={this.handleSubmit}>
          Invite
        </Button>
      </form>
    );
  }
}
