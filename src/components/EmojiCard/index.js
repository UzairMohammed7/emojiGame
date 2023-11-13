import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiButton = () => {
    clickEmoji(id)
  }
  return (
    <li className="emojiList">
      <button type="button" className="emoji-btn" onClick={onClickEmojiButton}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
