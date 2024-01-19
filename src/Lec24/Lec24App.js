import { Component } from "react";
class MyApp24 extends Component {

  // Dekhte hai ki kon pehle call hota hai. HTML, render, componentDidMount me.
  constructor() {
    super(); // taki this use karne me problem na ho

    console.log("Constructor  Called");;
  }
  componentDidMount() {

    console.log("componentDidMount called");

  }
  render() {
    console.log("Render Called");
    return (<>
      <h1> Component Did Mount</h1>
    </>)
  }
}
export default MyApp24;