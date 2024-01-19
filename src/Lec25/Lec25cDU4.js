// componentDidUpdate
import React from 'react'
class MyApp25D extends React.Component {

  constructor() {

    super();
    this.state = {
      count: 0
    }
    console.log("Starting state is", this.state.count);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    console.log("componentDidUpdate", prevState.count, this.state.count);

    // ye infinite time chalega.
    // this.setState({count:this.state.count+1});


    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }

  }

  render() {

    // console.log("render");

    return (
      <>
        <h1>Component Did Update 10 times</h1>
        <br />
        <h2>{this.state.count}</h2>

        <button onClick={() => { this.setState({ count: 3 }) }}>Update count</button>

      </>

    )

  }

}
export default MyApp25D;