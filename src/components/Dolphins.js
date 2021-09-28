import React from "react";

function Dolphins(props) {
  return(
    <div>
      <h3>Week {props.dol.week}</h3>
      <h3>{props.dol.date} , {props.dol.time}</h3>
      <h3>{props.dol.opponent}</h3>
    </div>
  )
}

export default Dolphins