
//render component via function
import React from 'react'

const DEFAULT_IMG =
  "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";


export default function Box(props) {
    
    const winner = props.title === props.player;
    //const winner = (props.title === props.player);
    console.log(props.player)
    let className
    const hasPreviousGame =
      props.player === "Computer" || props.player === "You";
    if (hasPreviousGame) {
      className = winner ? "winner" : "loser";
    }
  
    let prompt;
    if (winner) {
      prompt = "won";
      className = winner ? "winner" : "loser";
    } else if (props.player === "Tied") {
      prompt = "tied";
    } else if (!props.player) {
      prompt = "";
    } else {
      prompt = "lost";
    }
  

    return (
        <div className={`box ${className}`}  >
        {/* start wrap */}
        <h1>{props.title} {prompt}</h1>
        <div>{props.title} has chosen {props.choice.name || "nothing"}</div>
        <img alt ={props.choice.name} src={props.choice.url || DEFAULT_IMG}/>
        {/* <div>{props.title} {prompt}</div> */}
        {/* end wrap */}
        </div>
    )
}
//render component via function


/*
Box Computer: Win or Lose
title: Computer

Box You: Win or Lose
title: You



previousWinner: Computer or You


*/