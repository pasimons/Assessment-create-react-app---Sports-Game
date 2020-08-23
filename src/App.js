import React from 'react';
import './App.css';
import Game from './components/game/Game'
import toonImage from './images/teamToon.jpeg';
import monsterImage from './images/teamMonster.jpeg';
import meteorMetropolisImage from './images/superman.jpeg';
import southParkImage from "./images/southparkcows.png"


function App(props) {
  const toon = {
      name: "toon",
      logoSrc: toonImage
  }
  const monster = {
      name: "monster",
      logoSrc: monsterImage
  }
  const southPark = {
      name: 'southPark',
      logoSrc: southParkImage
  }
  const meteorMetropolis = {
      name: "meteorMetropolis",
      logoSrc: meteorMetropolisImage
  }


  return (
      <div className="App">

          <Game
              venue="Union 525 Gem"
              homeTeam={toon}
              visitingTeam={monster}
          />

          <Game
              venue="The Tune Stadium"
              homeTeam={meteorMetropolis}
              visitingTeam={southPark}
          />
      </div>


  )
}


export default App;
