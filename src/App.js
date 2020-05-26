import React,{useState} from 'react';
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

// render via Function
function App() {
const saveUsername = () =>{
  const newUsername = document.getElementById("input-field").value
  localStorage.setItem('username', newUsername);
  setUsername(newUsername);
}

const saveResult = () =>{
  localStorage.setItem("GameHistory", JSON.stringify(gameHistory));
}

if (!localStorage.getItem('GameHistory')){
  localStorage.setItem("GameHistory", JSON.stringify([]))
}

  let [userC, setUserC] = useState({}) //state
  let [computerC, setComputerC] = useState({}) //state
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [previousWinner, setPreviousWinner] = useState("")//state
  const [gameHistory, setGameHistory] = useState(JSON.parse(localStorage.getItem('GameHistory')));
  const [started, setStarted] = useState(false);//state
  const [result, setResult] = useState(null) //state
  const [resultBox, setResultBox] = useState("")



  const onplay = (userChoice) =>{
    if (!username){
      alert("You must enter a username")
      return;
    }
    console.log("clicked", userChoice)
    //define user's choice
    setUserC(CHOICES[userChoice])
    console.log("user chooses this one", CHOICES[userChoice])
    //computer chooses logic should be here
    //computer chooes random item
    let computerArray = Object.keys(CHOICES) //get the key from the object Choices
    let randomNum = Math.floor(Math.random()*(computerArray.length))
    let computerName = computerArray[randomNum]

    setComputerC (CHOICES[computerName])
    console.log("what is computer choice", CHOICES[computerName])

    let result =""

    if (userChoice === "rock") {
      result = CHOICES[computerName].name === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
      result = CHOICES[computerName].name === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
      result = CHOICES[computerName].name === "paper" ? "Victory!" : "Defeat!";
    }
    if (userChoice === CHOICES[computerName].name) result = "Tied!";
    
    console.log(result)

    gameHistory.push(username+": "+result);
    saveResult()
    setGameHistory(gameHistory)

    if (result === "Victory!"){
      setResult("Victory!")
      setPreviousWinner("You")
      setResultBox("winner")
    }
    if (result === "Defeat!"){
      setResult("Defeat!")
      setPreviousWinner("Computer")
      setResultBox("loser")
    }
    if (result === "Tied!"){
      setResult("Tied!")
      setPreviousWinner("Tied")
      setResultBox("tied")
    }
    if (gameHistory.length%5===0){
      console.log(gameHistory.length)
      setResult("Flawless Victory!")
    }
  }



  return (
    <body>
      <h1>THE JANKEN GAME</h1>
   <div className="render">
     <Box title ="You" choice={userC} player={previousWinner}  />

     <div>
       <button disabled={!started} onClick ={()=>onplay('rock')}>Rock</button>
       <button disabled={!started} onClick ={()=>onplay('paper')}>Paper</button>
       <button disabled={!started} onClick ={()=>onplay('scissors')}>Scissor</button>
       <div>
       <div className ={`result-box ${resultBox}`}><h1>{result}</h1></div>
       </div>
       <div>
       <button onClick={() => setStarted(!started)}>Start</button>
       <input id="input-field" placeholder="username"></input>
       <button onClick ={() => saveUsername()}>Submit</button>
        <center><h3>History {username}</h3> </center>
        <ul className="history-log">
      {gameHistory.map(result => {
      return <li>{result}</li>;
      })}

        </ul>
       </div>
      </div>

     <Box title ="Computer" choice={computerC}  player={previousWinner}/>
  
   </div>
   </body>
  )
}

// render via Function


export default App;
