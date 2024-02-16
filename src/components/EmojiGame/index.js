import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
  }

  clickEmoji = id => {
   const {emojisList} = this.props;
   //1. Destructuring the emojisList from props

   const {clickedEmojisList} = this.state;
   //2. Destructuring the clickedEMojisList from state

   const isEmojiPresent = clickedEmojisList.includes(id);
   //3. Checking whether the clickedEmojisList contains the id(which clicked present) or not.

   const clickedEmojisLength = clickedEmojisList.length;
   //4. assigning the lengh of the clickedEmojisList to the clickedEmojisLength.

   if (isEmojiPresent) {
   //5. If the clickedEmojisList already contains the present clicked id, (that means smae emoji clicked twice), then the method finishGameAndSetTopScore will be called and game will be finished.

     this.finishGameAndSetTopScore(clickedEmojisLength);
   } else {
     if (emojisList.length - 1 === clickedEmojisLength) {
   //6. If the all the emoji's in the emojisList are clicked excatly once then the game will be finished.
      //6. 1 The emojisList.length - 1 will be equal to the length of the clickedEmojisLength(when clicking the final emoji)

      this.finishGameAndSetTopScore(emojisList.length);
     }
     this.setState(previousState => ({
       clickedEmojisList: [...previousState.clickedEmojisList, id],
     }));
    //7. setting the state clickedEmojisList by appending the clicked emoji id using the spread operator and setState() method.
   }
}

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

  render() {
    const {emojisList} = this.props
    const {score, topScore} = this.state

    return (
      <div>
        <NavBar score={score} topScore={topScore} />
        <div>
          <ul>
            {emojisList.map(eachEmoji => (
              <EmojiCard emojiDetails={eachEmoji} key={eachEmoji.id} />
            ))}
          </ul>

          <WinOrLoseCard score={score} />
        </div>
      </div>
    )
  }
}

export default EmojiGame
