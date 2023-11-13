import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props
  return (
    <nav className="navbar-container">
      <div className="title-and-score">
        <div className="logo-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
