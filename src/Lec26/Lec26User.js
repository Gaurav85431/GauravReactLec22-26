import React from 'react';
class MyApp26 extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate() {
    console.log(this.state.count);
    // return false;
    // return true;

    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }


  }

  render() {
    return (<>

      console.log(this.state.count);
      <h1> Should component Update {this.state.count}</h1>

      <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Counter</button>

    </>)
  }

}
export default MyApp26;