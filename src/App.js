
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Player from './Components/Player/Player';
import fakeJson from './fakeProject.json';
import { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from './Components/Cart/Cart';


function App() {
  const [playerData, setPlayerData]= useState([]);
  
  const [player, setPlayer] = useState([]);
  useEffect(() =>{
    setPlayerData(fakeJson);
 
  }, []);
  
 const handleAddPlayer = (unit)=>{
       
        if (player.indexOf(unit) === -1){
          const newPlayer = [...player, unit];
          setPlayer(newPlayer);
        }
        else{
          alert('You already select this player')
        }

      
 };
//  console.log(player);

  return (
    <div className="App">
      <header className="container-fluid" style={{height:'150px', backgroundColor:'#C60122'}}>
        <h1 className="pt-3 text-light display-2">New Horizon Football Club</h1>
      </header>
        <div className= "container-fluid d-flex w-100">
          
            <div className="d-flex flex-wrap">
            {playerData.map(player => <Player handleAddPlayer={handleAddPlayer} fakeData={playerData} key = {playerData.id} player={player}></Player>)}
            </div>  

          <div className='w-50 bg-dark text-light my-2' >
            {/* <h4>Total payer: {playerData.length}</h4> */}
            {/* <h5>Added player :{player.length}</h5>
            <h5>Total Cost :{totalCost}</h5> */}
            <Cart player={player}></Cart>
          </div>  
        </div> 
    </div>
  );
}

export default App;
