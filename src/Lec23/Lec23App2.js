// hm Lec23App.js se koi props pass karenge to hme pata chal jayega ki hamra child component update ho rha hia.

import { useState } from "react"
import User2 from "./Lec23User2";




function MyNewApp2() {

  const [name, setName] = useState("Gaurav");


  return (
    <>

      <h1> Render method in React</h1>

      {/* Now we are sending the data i.e. name */}
      <User2 myName={name} />



      <button onClick={() => setName("Sidhu")}>Update Name</button>


    </>

  )


}
export default MyNewApp2;