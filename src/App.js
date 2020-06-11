import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box.js";

const CHOICES = {
  scissors: {
    name: "scissors",
    url:
      "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-004-512.png",
  },
  paper: {
    name: "paper",
    url:
      "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-019-512.png",
  },
  rock: {
    name: "rock",
    url:
      "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-016-512.png",
  },
};
let victory = 0;
// render via Function
function App() {
  const saveUsername = () => {
    const newUsername = document.getElementById("input-field").value;
    localStorage.setItem("username", newUsername);
    setUsername(newUsername);
  };

  const saveResult = () => {
    localStorage.setItem("GameHistory", JSON.stringify(gameHistory));
  };

  if (!localStorage.getItem("GameHistory")) {
    localStorage.setItem("GameHistory", JSON.stringify([]));
  }

  let [userC, setUserC] = useState({}); //state
  let [computerC, setComputerC] = useState({}); //state
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [previousWinner, setPreviousWinner] = useState(""); //state
  const [gameHistory, setGameHistory] = useState(
    JSON.parse(localStorage.getItem("GameHistory"))
  );
  const [started, setStarted] = useState(false); //state
  const [resultBox, setResultBox] = useState("");
  const [resultBoxContent, setResultBoxContent] = useState("");

  const onplay = (userChoice) => {
    if (!username) {
      alert("You must enter a username");
      return;
    }
    console.log("clicked", userChoice);
    //define user's choice
    setUserC(CHOICES[userChoice]);
    console.log("user chooses this one", CHOICES[userChoice]);
    //computer chooses logic should be here
    //computer chooes random item
    let computerArray = Object.keys(CHOICES); //get the key from the object Choices
    let randomNum = Math.floor(Math.random() * computerArray.length);
    let computerName = computerArray[randomNum];

    setComputerC(CHOICES[computerName]);
    console.log("what is computer choice", CHOICES[computerName]);

    let result = "";

    if (userChoice === "rock") {
      result =
        CHOICES[computerName].name === "scissors" ? "Victory!" : "Defeat!";
      // if (result === "Victory!"){
      //   victory++
      // }
    }
    if (userChoice === "paper") {
      result = CHOICES[computerName].name === "rock" ? "Victory!" : "Defeat!";
      // if (result === "Victory!"){
      //   victory++
      // }
    }
    if (userChoice === "scissors") {
      result = CHOICES[computerName].name === "paper" ? "Victory!" : "Defeat!";
      // if (result === "Victory!"){
      //   victory++
      // }
    }
    if (userChoice === CHOICES[computerName].name) result = "Tied!";
    if (result === "Victory!") {
      victory++;
      setResultBoxContent("Victory!");
      setPreviousWinner("You");
      setResultBox("winner");
      console.log("2 How many victory is there", victory);
    }
    if (result === "Defeat!") {
      victory = 0;
      setResultBoxContent("Defeat!");
      setPreviousWinner("Computer");
      setResultBox("loser");
    }
    if (result === "Tied!") {
      victory = 0;
      setResultBoxContent("Tied!");
      setPreviousWinner("Tied");
      setResultBox("tied");
    }
    if (victory === 4) {
      victory = 0;
      result = "Flawless Victory!";
      console.log("2 How many victory is there", victory);
      setResultBoxContent("Flawless Victory!");
    }
    console.log(result);

    gameHistory.push(username + ": " + result);
    if (gameHistory.length >= 7) {
      gameHistory.splice(0, 1);
    }
    // setGameHistory([...gameHistory, (username+": "+result)]);//new history

    saveResult();
    setGameHistory([...gameHistory]);
  };

  return (
    <div className="body">
      <h1>THE JANKEN GAME</h1>
      <div className="render">
        <Box title="You" choice={userC} player={previousWinner} />

        <div>
          <center>
            <button
              id="choice-button"
              className="btn-primary btn-lg px-3 py-1 mx-3"
              disabled={!started}
              onClick={() => onplay("rock")}
            >
              Rock
            </button>
            <button
              id="choice-button"
              className="btn-primary btn-lg px-3 py-1 mx-3"
              disabled={!started}
              onClick={() => onplay("paper")}
            >
              Paper
            </button>
            <button
              id="choice-button"
              className="btn-primary btn-lg px-3 py-1 mx-3"
              disabled={!started}
              onClick={() => onplay("scissors")}
            >
              Scissor
            </button>
          </center>
          <div>
            <center>
              <div className={`result-box ${resultBox}`}>
                <h1>{resultBoxContent}</h1>
              </div>
            </center>
          </div>
          <div>
            <center>
              <button onClick={() => setStarted(!started)}>START</button>
              <input id="input-field" placeholder="Username"></input>
              <button onClick={() => saveUsername()}>Sign In</button>
            </center>
            <center>
              <h3>History {username}</h3>{" "}
            </center>
            <ul className="history-list">
              {gameHistory.map((result, index) => {
                return (
                  <center>
                    <li key={index} className="history-log">
                      {result}
                    </li>
                  </center>
                );
              })}
            </ul>
          </div>
        </div>

        <Box title="Computer" choice={computerC} player={previousWinner} />
      </div>
    </div>
  );
}

// render via Function

export default App;
