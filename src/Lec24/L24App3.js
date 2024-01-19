import React from "react";
class MyApp24C extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "user1"
    }
    console.log("constructor-- ", this.state.user);
  }

  render() {
    this.setState({ user: "user2" })
    console.log("render-- ", this.state.user);
    return (
      <>
        <h1>welcome</h1>
      </>
    );

  }
}

export default MyApp24C;
