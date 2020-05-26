
//render component via function
import React from 'react'

export default function Box(props) {

//     //in Function render, you can use "let" or "const"
    const callme=(status)=>{
        console.log(status)
        alert("You have " + status +"!")
    }
    return (
        <div className={`box ${props.color}`}  >
        {/* start wrap */}
        <p className={`para ${props.name}`}>My {props.name} is {props.color}</p>
        <p><img alt="weapon" src={props.src}/></p> 
        <p className={`para ${props.name}`}>and has {props.status}!</p>
        <button onClick={()=>callme(props.status)}>See result!</button>
        {/* end wrap */}
        </div>
    )
}
//render component via function


