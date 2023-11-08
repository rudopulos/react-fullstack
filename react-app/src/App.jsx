import { Component } from "react";
import Tutors from "./components/Tutors/Tutors.jsx";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.component.jsx";
import University from "./components/University/University.component.jsx";
import Cities from "./components/Cities/Cities.jsx";
import Faculties from "./components/Faculties/Faculties.jsx";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Sidebar />
        <section className="container">
          <University />
          <Tutors />
          <Cities />
          <Faculties />
        </section>
      </main>
    );
  }
}

export default App;
