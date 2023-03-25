import React, { useState } from "react";

function HookuseState() {

  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}

class AppUgly extends React.Component {
  state = {
    item : 1
  }
  render() {
    const {item} = this.state;
    return (
      <div className="appugly">
        <h1>hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }

  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  }
}

export default HookuseState;