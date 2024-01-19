import { Component } from "react";
class MyApp24B extends Component {

  constructor() {
    super(); // taki this use karne me problem na ho
    this.state = {
      name: "Gaurav"
    }
  }
  componentDidMount() {
    console.log("componentDidMount called");
  }
  render() {
    return (<>
      <h1> Component Did Mount {this.state.name} </h1> {/** pehle ye show karega i.e. component did mount Gaurav */}

      {/* After clicking button it will show Gaurav Pushpam */}
      <button onClick={() => { this.setState({ name: "Gaurav Pushpam" }) }}>Update Name</button>
      {/* onclick is button ka event */}
    </>)
  }
}
export default MyApp24B;