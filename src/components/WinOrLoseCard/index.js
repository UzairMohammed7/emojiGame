import './index.css'

const WIN_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLossCard = props => {
  const {isWon, onClickPlayAgain, result} = props
  const gameResult = isWon ? 'You Won' : 'You Lose'
  const resultImage = isWon ? WIN_IMAGE : LOSE_IMAGE
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="detail-sec">
        <h1>{gameResult}</h1>
        <p>{scoreLabel}</p>
        <p>{result}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={resultImage} className="win-or-lose" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
