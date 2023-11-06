import { Component } from "react";
import Tutors from "./components/Tutors.jsx";
import "./App.css";
import AddTutor from "./components/AddTutor.jsx";

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

        <button
          onClick={() =>
            this.setState({
              isTutorAddPanelVisible: true,
            })
          }
        >
          Add Tutor
        </button>
      </main>
    );
  }
}

export default App;
