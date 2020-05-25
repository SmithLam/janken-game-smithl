import React from 'react';
import './App.css';
import Box from './components/Box.js'
import List from './components/List'

function App() {
  return (
   <div>
     <Box name="first" color="red"/>
     <Box name="second" color="blue"/>
     <Box name="third" color="orange"/>
     <Box name="fourth"color="yellow" />

     <ul>
  <List/>
  <List/>
  <List/>
     </ul>
   </div>
  );
}

export default App;
