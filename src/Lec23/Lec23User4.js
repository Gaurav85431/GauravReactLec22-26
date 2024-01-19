import React from "react";
class User4 extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "anil@gmail.com"
    }
    // receive
    console.log(this.props.myName);
  }
  render() {
    console.log("Render method", this.state.email);

    return (
      <>
        <h1> Constructor k under props receive</h1>

        <button onClick={() => this.setState({ email: "guarav@gmail.com" })}>Update Mail</button>
      </>
    )

  }
} export default User4;