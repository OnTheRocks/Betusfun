import React from "react";
// import Dolphins from "../components/Dolphins";
import dolphins from "../Data/DolphinsSchedule";


function Schedule(props) {
  const dC = dolphins.map(sched => <Dolphins key={sched.week} dol={sched}/>)

  // console.log(dC)

  return(
    <div>
      <div className="scheduleMain">2021 Schedule</div>
      <table>
        <tr>
          <th>Week</th>
          <th>Date</th>
          <th>Time(ET)</th>
          <th>Opponent</th>
          <th>Open</th>
          <th>Line</th>
          <th>Score</th>
          <th>W/L</th>
        </tr>
        <tr>
          <td>{dC}</td>
        </tr>
      </table>
      {dC}
    </div>
  )
}



export default Schedule;