import React        from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle } from 'material-ui/Card';
// Inline CSS Styles
import { cardContainer } from './styles/styles';
// Components
import Score from './Score.jsx';
import ShowAnswerButton from './ShowAnswerButton.jsx';
import AnswerSide from './AnswerSide.jsx';
// Data
import data from '../../../data.js';


class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: 0,
      currCard: data[0],
      score: 0,
      cardFlipped: false,
    };
    this.nextCard = this.nextCard.bind(this);
    this.cardFlipped = this.cardFlipped.bind(this);
    this.addPoint = this.addPoint.bind(this);
  }

  nextCard() {
    console.log('before',this.state.cardNumber)
    let nextCardNumber = this.state.cardNumber + 1;
    console.log(nextCardNumber)
    if (data[nextCardNumber] === undefined) {
      nextCardNumber = 0;
    }
    this.setState({
      cardNumber: nextCardNumber,
      currCard: data[nextCardNumber],
    });
    this.cardFlipped();
  }

  cardFlipped () {
    let currState = this.state.cardFlipped;
    this.setState({cardFlipped: !currState});
  }

  addPoint () {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
    this.nextCard();
  }

  render () {
    return (
      <div>
        <Card style={cardContainer}>
          <Score score={this.state.score}/>
          <CardTitle title={this.state.currCard.question}/>
          { this.state.cardFlipped ?
            // add answer prop to pass down to answer side
            <AnswerSide
              question={this.state.currCard.answer}
              correct={this.addPoint.bind(this)}
              incorrect={console.log('you suck')}
            />
            :
            <ShowAnswerButton
              flip={this.cardFlipped.bind(this)}
            />
          }
        </Card>
      </div>
    )
  }
}

export default FlashCard;
