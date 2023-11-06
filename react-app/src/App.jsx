import { Component } from "react";
import Tutors from "./components/Tutors/Tutors.jsx";
import "./App.css";
import AddTutor from "./components/Tutors/AddTutor/AddTutor.jsx";
import Sidebar from "./components/Sidebar/Sidebar.component.jsx";
import University from "./components/University/University.component.jsx";
import Button from "./components/buttons/Button.jsx";

class App extends Component {
  state = {
    isTutorAddPanelVisible: false,
  };

  tutors = [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      telephone: "07123456",
      email: "johnsmith@company.com",
      location: "Paris",
      role: "Administrator",
    },
  ];

  render() {
    const { isTutorAddPanelVisible } = this.state;

    return (
      <main className="App">
        <Sidebar />
        <section className="container">
          <University />
          <Tutors list={this.tutors} />

          {isTutorAddPanelVisible && (
            <AddTutor
              hideForm={() =>
                this.setState({
                  isTutorAddPanelVisible: false,
                })
              }
            />
          )}

          <div className={"mt-16"}>
            <Button
              action={() =>
                this.setState({
                  isTutorAddPanelVisible: true,
                })
              }
            >
              Add Tutor
            </Button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
