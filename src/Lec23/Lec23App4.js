import { useState } from "react"
import User4 from "./Lec23User4";


function MyNewApp4() {

  let [name, setName] = useState("Gaurav");



  return (
    <>
      <h1> Render method in React</h1>

      {/* send */}
      <User4 myName={name} />


      <button onClick={() => { setName("Anil") }} > Chng nm </button>
    </>

  )
}
export default MyNewApp4;