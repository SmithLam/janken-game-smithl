import React from 'react';
import './App.css';
import Box from './components/Box.js'


// render via Function
function App() {
  return (
    <body>
      <h1>THE JANKEN GAME</h1>
   <div className="render">
     <Box name="Sword" status="won" src="http://darksouls3.wdfiles.com/local--files/image-set-equipment:long-sword/Long-Sword.png"color="red"/>
     <Box name="Spear" status="draw" src="http://darksouls3.wdfiles.com/local--files/image-set-equipment:pike/Pike.png" color="orange"/>
     <Box name="Axe" status="lost" src="http://darksouls3.wdfiles.com/local--files/image-set-equipment:hand-axe/Hand-Axe.png" color="blue"/>
  
   </div>
   </body>
  );
}
// render via Function


export default App;
