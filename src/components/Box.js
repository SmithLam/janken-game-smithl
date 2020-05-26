
//render component via function
import React from 'react'

const DEFAULT_IMG =
  "http://is5.mzstatic.com/image/thumb/Purple118/v4/63/2e/de/632ede7d-21ce-050f-7629-b9f4f0d2f833/source/512x512bb.png";


export default function Box(props) {
    
    const winner = props.title === props.player; //winner is a boolean comparison 
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