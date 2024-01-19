import React from "react";

class User3 extends React.Component {


  constructor() {

    super(); // this se pehle super() must call otherwise error give
    this.state = {
      email: "anil@gmail.com"
    }

  }


  render() {
    console.log("Render method", this.state.email); // ye to first time chalegi
    // jb state change hogi tb v ye render hoga for this hme button ke click per update karna hoga.

    return (
      <>
        <h1> User Component</h1>

        <button onClick={() => this.setState({ email: "guarav@gmail.com" })}>Update Mail</button>
        {/* button ke click karne per email change ho jayega. It means ✍️ ye STATE KE UPDATE HONE PER V KAAM KARTA HAI */}
      </>
    )

  }

  // ye update kyon ho rha hai?
  // => Jb v koi state me value aayega like this.props.name , to jb tk hm render ko update nhi karayenge to nya name kaise aayega.



}
export default User3;