import React from 'react';
import './App.css';
import Box from './components/Box.js'
import List from './components/List'

//render via Function
function App() {
  return (
    <body>
      <h1>THE JANKEN GAME</h1>
   <div className="render">
     <Box name="Sword" status="won" src="https://i.ytimg.com/vi/kYfewzvRhn4/hqdefault.jpg"color="red"/>
     <Box name="Spear" status="draw" src="https://cdn.gorillasurplus.com/images/products/large/COL95MEP.jpg" color="orange"/>
     <Box name="Axe" status="lost" src="http://dreamicus.com/data/axe/axe-01.jpg" color="blue"/>
      {/* <Box name="fourth"color="yellow" /> */}

     {/* <ul>
  <List/>
  <List/>
  <List/>
     </ul> */}
   </div>
   </body>
  );
}
//render via Function

//render via Class
// class App extends React.Component {
//   render() {
//     return <div>
//             <Box name="Sword" status="won" src="https://i.ytimg.com/vi/kYfewzvRhn4/hqdefault.jpg"color="red"/>
//             <Box name="Spear" status="draw" src="https://cdn.gorillasurplus.com/images/products/large/COL95MEP.jpg" color="orange"/>
//             <Box name="Axe" status="lost" src="http://dreamicus.com/data/axe/axe-01.jpg" color="blue"/>
//             </div>
//   }
// }
//render via Class


export default App;
