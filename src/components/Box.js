import React from 'react'



export default function Box(props) {
    return (
        <div className={`box ${props.color}`}  >
        {/* start wrap */}
        <p>my {props.name} is {props.color}</p>
        <p><img alt="weapon" src={props.src}/></p> 
        <p>and has {props.status}</p>



        {/* end wrap */}
        </div>
    )
}
