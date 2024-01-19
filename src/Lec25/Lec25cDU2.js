// componentDidUpdate
import React from 'react'
class MyApp25B extends React.Component {

  constructor() {

    super();
    this.state = {
      count: 1
    }
    console.log("Starting state is", this.state.count);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // snapshot rarely used.
    //give any name prevProps,x,y,... etc.


    // prevProps pichle state ko provide karega.
    console.log("prevState is ", prevState);

  }

  render() {

    // console.log("render");

    return (
      <>
        <h1>Component Did Update</h1>
        <br />
        <h2>{this.state.count}</h2>

        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update count</button>

      </>

    )

  }

}
export default MyApp25B;