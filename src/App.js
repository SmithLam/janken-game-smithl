import React from 'react';
import './App.css';
import Box from './components/Box.js'
import List from './components/List'

function App() {
  return (
   <div>
     <Box name="sword" status="won" src="https://i.ytimg.com/vi/kYfewzvRhn4/hqdefault.jpg"color="red"/>
     <Box name="axe" status="lost" src="http://woodsmithexperience.co.uk/uploaded/thumbnails/db_file_img_3785_190x0.jpg" color="blue"/>
     {/* <Box name="third" color="orange"/>
     <Box name="fourth"color="yellow" /> */}

     {/* <ul>
  <List/>
  <List/>
  <List/>
     </ul> */}
   </div>
  );
}

export default App;
