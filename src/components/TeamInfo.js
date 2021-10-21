import React from "react";
import dolphinsData from "../Data/DolphinsData";
import dSched from "../Data/DolphinsSchedule"



const TeamInfo = () => {

console.log(dolphinsData.dolphinsSchedule)

  return(
    <div>
      <div className="teamNameHeader">
        <div className="Team">
          <h3 className="Division">{dolphinsData.division}</h3>
        </div>
          <h1 className="TeamCity">{dolphinsData.city}</h1>
          <h1 className="TeamMascot">{dolphinsData.mascot}</h1>
          <p>2020 REC: Record  &nbsp; &nbsp; &nbsp;   ATS: Record</p>
          
      </div>
      <p></p>
      <p className="Bluto">{dSched.week}</p>
    </div>
  )
};

export default TeamInfo;
