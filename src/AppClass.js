import React, { Component } from 'react'
import './App.css';
import Box from './components/Box.js'

const CHOICES = {
    scissors: {
      name: "scissors",
      url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
    },
    paper: {
      name: "paper",
      url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
    },
    rock: {
      name: "rock",
      url:
        "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
    }
  };


export default class App extends Component {

    constructor(props){//initialize
        super(props)//set prop for parents as well

        this.state={
            userC:{},
            computerC:{}
        }
    }
  
    onplay = (userChoice) =>{
      console.log("clicked", userChoice)
      //define user
      //computer chooses logic should be here
      //computer chooes random item
      let itemArray = Object.keys(CHOICES) //get the key from the object Choices
      let randomNum = Math.floor(Math.random()*(itemArray.length))
      let itemName = itemArray[randomNum]

      this.setState({userC:CHOICES[userChoice], computerC:CHOICES[itemName]})
    }

    render() {
        return (
            <body>
            <h1>THE JANKEN GAME</h1>
         <div className="render">
           <Box title ="YOU" choice={this.state.userC}/>
             <button onClick ={()=>this.onplay('rock')}>Rock</button>
             <button onClick ={()=>this.onplay('paper')}>Paper</button>
             <button onClick ={()=>this.onplay('scissors')}>Scissor</button>
      
           <Box title ="COMPUTER" choice={this.state.computerC}/>
        
         </div>
         </body>
        )
    }
}
