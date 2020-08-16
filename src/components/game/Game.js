import React from 'react'
import Team from '../team/Team'


function Game(props) {
    
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc} />

                <br />

                <div className="versus">
                    <h1>
                        <strong>
                            <em> Vs!</em>
                        </strong>
                    </h1>
                </div>

                <br />

                <Team name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc} />

            </div>
        </div>
    )
}
export default Game