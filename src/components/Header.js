import React from "react";
import TeamInfo from "./TeamInfo";
import TeamStats from "./TeamStats";

function Header() {
  return(
    <div className="headContainer">
      <div className="teamInfo"><TeamInfo /></div>
      <div className="teamStats"><TeamStats /></div>
    </div>
  )
}

export default Header;