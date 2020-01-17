import React from "react";

const InfoCard = (props)=>{
  console.log('info props', props);
//   console.log("what I'm looking for", props.info);
//   console.log("more specifically what I want", props.info.data);
    return (
      <div className = "info-card">
        {/* {props.info.data.map(player => (
          <div key = {player.name} className = "player">
              <h1>Name: {player.name}</h1>
              <p>Country: {player.country}</p>
              <p>Searches: {player.searches}</p>
          </div>
        ))} */}
  </div>
  )

}

export default InfoCard;
