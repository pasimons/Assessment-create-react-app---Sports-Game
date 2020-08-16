import React from 'react';
import './App.css';
import Game from './components/game/Game'
import toon from 'src/images/teamToon.jpeg';
import monster from 'src/images/teamMonster.jpeg';
import meteorMetropolis from 'src/images/superman.jpeg';
import southPark from 'src/images/southparkcows.png'


function App(props) {
  const toon = {
      name: "toon",
      logoSrc: 'teamToon.jpeg'
  }
  const monster = {
      name: "monster",
      logoSrc: 'teamMonster.jpeg'
  }
  const southPark = {
      name: 'southPark',
      logoSrc: 'southparkcows.png'
  }
  const meteorMetropolis = {
      name: "meteorMetropolis",
      logoSrc: 'superman.jpeg'
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
