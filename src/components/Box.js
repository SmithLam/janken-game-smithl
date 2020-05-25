
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
        <button onClick={()=>callme(props.status)}>Click me!</button>
        {/* end wrap */}
        </div>
    )
}
//render component via function


//render component via class

// import React, { Component } from 'react'
// export default class Box extends Component {
    
//     //in Class function, you cannot use "let" or "const" only the ES6 way or normal function way
//     callme = () =>{
    // alert("You lose")
//     }

//     render() {
//         return (
//         <div className={`box ${this.props.color}`}  >
//         {/* start wrap */}
//         <p className={`para ${this.props.name}`}>My {this.props.name} is {this.props.color}</p>
//         <p><img alt="weapon" src={this.props.src}/></p> 
//         <p className={`para ${this.props.name}`}>and has {this.props.status}!</p>
//         <button onClick={()=>this.callme()}>Click me!</button>
//         {/* end wrap */}
//         </div>
//         )
//     }
// }

//render component via class