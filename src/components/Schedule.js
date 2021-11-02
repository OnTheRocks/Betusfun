import React from "react";
import dolphinsData from "../Data/DolphinsData";
import dSched from "../Data/DolphinsSchedule";

function Schedule(props) {
  
  // const dS = dSched.map(sched => <Dolphins key={sched.week} dol={sched}/>)

  return(
    <div>
      <div className="scheduleMain">2021 Schedule</div>
      <table>
        <thead> 
          <tr className="hRow">
            <th>Week</th>
            <th>Date</th>
            <th>Time(ET)</th>
            <th>Opponent</th>
            <th>Open</th>
            <th>Line</th>
            <th>Score</th>
            <th>W/L</th>
          </tr> 
        </thead>   
          <tbody> 
            {/* <tr>{dolphinsData.dolphinsSchedule[2]}</tr> */}
            <tr><td>{dSched}</td></tr>
            {/* <tr><td>{dolphinsData.mascot}</td></tr> */}

          </tbody>       

 
      </table>  

    </div>
  )
}



export default Schedule;