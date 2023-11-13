/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickEmojiList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickEmojiList: [], isGameInProgress: true})
  }

  renderResult = () => {
    const {clickEmojiList} = this.state
    const {emojisList} = this.props
    const isWon = clickEmojiList.length === emojisList.length

    return (
      <WinOrLossCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        result={clickEmojiList.length}
      />
    )
  }

  finalScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > topScore) {
      newTopScore = score
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    const isEmojiPresent = clickEmojiList.includes(id)
    const clickedEmojisLength = clickEmojiList.length

    if (isEmojiPresent) {
      this.finalScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finalScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojiList: [...prevState.clickEmojiList, id],
      }))
    }
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojiList()

    return (
      <ul className="emojiList-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, clickEmojiList, topScore} = this.state

    return (
      <div className="main-container">
        <NavBar
          topScore={topScore}
          isGameInProgress={isGameInProgress}
          score={clickEmojiList.length}
        />
        <div className="emojiGame">
          {isGameInProgress ? this.renderEmojiList() : this.renderResult()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
