import React, { Component } from "react";

// Class Component
class PanelTwo extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       counter: this.props.startingValue,
  //     };

  //     this.title = "Panou nou";
  //   }

  static defaultProps = {
    startingValue: 0,
  };

  static title = "Panou Nou";

  state = {
    page: 1,
    titlulCapitolului: "Stare in React",
    counter: this.props.startingValue,
  };

  render() {
    const { index } = this.props;

    console.dir(this.props);
    return (
      <div>
        <h2>{this.title}</h2>
        <h4>Numaratoare: {this.state.counter}</h4>

        <button
          onClick={() => {
            let step = this.state.counter;
            for (let index = 0; index < 3; index++) {
              step++;
            }
            this.setState({
              counter: step,
              // this.state.counter = 1
            });

            // this.setState({
            //   counter: this.state.counter + 1,
            // });
          }}
        >
          Click
        </button>

        <button onClick={this.props.handleToggle}>Ascunde Panou</button>

        <h3>Index {index}</h3>
        <p>Panel Class Component</p>
      </div>
    );
  }
}

export default PanelTwo;
