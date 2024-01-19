// componentDidUpdate
import React from 'react'
class MyApp25 extends React.Component {

  constructor() {

    super();
    this.state = {
      name: "Gaurav"
    }
    console.log("Constructor called");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }

  render() {

    console.log("render");

    return (
      <>
        <h1>Component Did Update</h1>

        <button onClick={() => { this.setState({ name: "Gaurav Mihsra" }) }}>Update Name</button>

      </>

    )

  }

}
export default MyApp25;