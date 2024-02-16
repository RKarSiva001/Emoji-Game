// Write your code here.
const WinOrLoseCard = props => {
  const {score} = props
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/loss-game-img.png'

  return (
    <div>
      <h1>{score === 12 ? 'You Won' : 'You Lose'}</h1>
      <p>Best Score</p>
      <p>{score}/12</p>
      <button type="button">Play Again</button>
      <img src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
