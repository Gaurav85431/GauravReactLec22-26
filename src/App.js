import MyApp from "./Lec22/Lec22MyApp";
import MyNewApp from "./Lec23/Lec23App";
import MyNewApp2 from "./Lec23/Lec23App2";
import MyNewApp3 from "./Lec23/Lec23App3";
// import MyNewApp4 from "./Lec23/Lec23App4";
// import MyApp24C from "./Lec24/L24App3";
import MyApp24 from "./Lec24/Lec24App";
import MyApp24B from "./Lec24/Lec24App2";
import MyApp25 from "./Lec25/Lec25cDU";
import MyApp25B from "./Lec25/Lec25cDU2";
import MyApp25C from "./Lec25/Lec25cDU3";
import MyApp25D from "./Lec25/Lec25cDU4";
import MyApp26 from "./Lec26/Lec26User";

function App() {
  return (
    <>
      {/* Lec22.js */}
      <MyApp></MyApp>




      <br /><hr /> <br />
      {/* Lec23App.js */}
      <MyNewApp />

      <br /><hr /> <br />
      {/* Lec23App2.js */}
      <MyNewApp2 />

      <br /><hr /> <br />
      {/* Lec23App3.js */}
      <MyNewApp3 />

      <br /><hr /> <br />
      {/* Lec23App4.js */}{/** constructor k under props receive krna */}
      {/* <MyNewApp4 /> */}  {/** Error occur check why */}





      {/* componentDidMount    -------  Lec24App.js */}
      <br /><hr /><br /><hr /><br />
      {/* kon pehle run hoga i.e. constructor, render, componentDidMount */}
      <MyApp24></MyApp24>


      {/* componentDidMount    -------  Lec24App2.js  */}
      <MyApp24B />

      {/* WHEN STATE update in render() function */}
      {/* infinite time run */}
      {/* <MyApp24C /> */}



      {/* componentDidUpdate */}

      <br /><br /><hr />
      <MyApp25 />

      <br /><br /><hr />
      <MyApp25B />

      <br /><br /><hr />
      <MyApp25C />

      <br /><br /><hr />
      <MyApp25D />





      {/* should component UPdate */}
      <br /><br /><br /><hr />
      <MyApp26 />


    </>
  );
}

export default App;
