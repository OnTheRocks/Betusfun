import React from "react";
import Header from "./components/Header";
import Schedule from "./components/Schedule";


function App() {
  // const dC = dolphins.map(sched => <Dolphins key={sched.week} dol={sched}/>)
  return (
    <div className="App">
      <Header />
      <Schedule />
    </div>
  );
}



export default App;
