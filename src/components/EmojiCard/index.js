// Write your code here.
const EmojiCard = props => {
  const {emojiDetails} = props
  const {emojiName, emojiUrl} = emojiDetails

  return (
    <li>
      <div>
        <button type="button">
          <img src={emojiUrl} alt={emojiName} />
        </button>
      </div>
    </li>
  )
}

export default EmojiCard
