// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore} = this.props

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    )
  }
}

export default NavBar
