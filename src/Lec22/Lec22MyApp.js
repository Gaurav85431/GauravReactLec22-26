import React from "react";
class MyApp extends React.Component {

  constructor() {

    console.log("Constructor run");
    super();
    this.state = {
      data: "Gaurav"
    }

  }

  render() {

    return (
      <>
        <h1>Hello World</h1>
        <h2>My Name is 😊😊{this.state.data}</h2>
      </>
    )

  }



}
export default MyApp;