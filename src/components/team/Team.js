import React from 'react'


class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio('Switch3.mp3')
        this.scoreSound = new Audio('basket.mp3')

    }
    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 2
            this.scoreSound.play()
        }

        this.setState((state, props) => ({
            shots: state.shots + 2,
            score
        }))
    }


    render() {
        let shotPercentageDiv
        let shotPercentage = 0
        if (this.state.shots) {
            shotPercentage = Math.round((this.state.score / this.state.shots) * 100)

            shotPercentageDiv = (
                <div>
                    <strong>Shooting %: {shotPercentage}</strong>
                </div>
            )
        }

        return (
            <div className="Team">
                <h1>{this.props.name}</h1>

                <div className="logo">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>


                <div>
                    <button>
                        <strong>
                            <em>Shots:</em>{this.state.shots}
                        </strong>
                    </button>
                </div>

                <br />

                <div>
                    <button>
                        <strong>
                            <em>Score :</em> {this.state.score}
                        </strong>
                    </button>
                </div>
                <br />


                {shotPercentageDiv}

                <button onClick={this.shotHandler}><em>Shoot !</em></button>
            </div>
        )
    }
}
export default Team