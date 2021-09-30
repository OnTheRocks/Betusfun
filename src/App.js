import React from "react";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
// import Dolphins from "./components/Dolphins";
// import dolphins from "./Data/DolphinsSchedule";


function App() {
  // const dC = dolphins.map(sched => <Dolphins key={sched.week} dol={sched}/>)
  return (
    <div className="App">
      <Header />
      <Schedule />
      {/* {dC} */}
    </div>
  );
}



export default App;
