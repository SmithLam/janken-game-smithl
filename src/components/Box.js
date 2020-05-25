import React from 'react'



export default function Box(props) {
    return (
        <div className={`box ${props.color}`}  >
        {/* start wrap */}
        <p className={`para ${props.name}`}>My {props.name} is {props.color}</p>
        <p><img alt="weapon" src={props.src}/></p> 
        <p className={`para ${props.name}`}>and has {props.status}!</p>



        {/* end wrap */}
        </div>
    )
}

