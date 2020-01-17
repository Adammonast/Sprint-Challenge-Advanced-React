import React from "react";

const InfoCard = (props)=>{
    return (
      <div className = "info-card">
        {props.info.map(player => (
          <div key = {player.id} className = "player">
              <h3>Name: {player.name}</h3>
              <p>Country: {player.country}</p>
              <p>Searches: {player.searches}</p>
          </div>
        ))}
  </div>
  )

}

export default InfoCard;
