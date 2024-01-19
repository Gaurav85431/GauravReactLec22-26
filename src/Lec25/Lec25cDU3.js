// componentDidUpdate
import React from 'react'
class MyApp25C extends React.Component {

  constructor() {

    super();
    this.state = {
      count: 0
    }
    console.log("Starting state is", this.state.count);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    console.log("Current state is " + this.state.count + " and prevState is ", prevState);

    if (prevState.count === this.state.count) {
      alert("Both previous and current stae has same value");
    }
    else {

    }
  }

  render() {

    // console.log("render");

    return (
      <>
        <h1>Component Did Update</h1>
        <br />
        <h2>{this.state.count}</h2>

        <button onClick={() => { this.setState({ count: 3 }) }}>Update count</button>

      </>

    )

  }

}
export default MyApp25C;