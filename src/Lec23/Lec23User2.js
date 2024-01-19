import React from "react";

class User2 extends React.Component {


  render() {
    console.log("Render method");
    console.log(this.props); // jo aa rha hai Lec23App2.js se usko le rhe hai this.props me

    //Ye update kyon ho rha hia? =>  Jb v koi state ya props ke under data aayega aur hm state ya props use kar rhe hai, to agar hm render ke through update nhi karayenge to naya naam kaise aayega. (this.props.name) me. 
    //(OWN) 1 hi bar update hooga aisa nhi ki baar baar update hoga.

    console.log(this.props.myName);

    return (
      <>
        <h1> User Component</h1>
        <h2> {this.props.myName} </h2>
      </>
    )

  }

  // ye update kyon ho rha hai?
  // => Jb v koi state me value aayega like this.props.name , to jb tk hm render ko update nhi karayenge to nya name kaise aayega.



}
export default User2;