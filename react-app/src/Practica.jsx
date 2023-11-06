import { Component } from "react";
import "./App.css";
import PanelTwo from "./PanelTwo";

class Practica extends Component {
  state = {
    isVisible: true,
  };

  toggleVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {/* <Panel index={1} /> */}
        {isVisible && (
          <PanelTwo
            index={2}
            startingValue={0}
            handleToggle={this.toggleVisible}
          />
        )}

        {!isVisible && (
          <button onClick={() => this.toggleVisible()}>Afiseaza Panou</button>
        )}
      </div>
    );
  }
}

export default Practica;
