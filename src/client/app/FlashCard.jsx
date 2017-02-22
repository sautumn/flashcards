import React        from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { Card, CardTitle } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
// Inline CSS Styles
import { cardContainer } from './styles/styles';
// Components
import Score from './Score.jsx';
import ShowAnswerButton from './ShowAnswerButton.jsx';
import AnswerSide from './AnswerSide.jsx';
// Data
import data from '../../../data.js';

const possibleScore = data.length;

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: data,
      cardNumber: 0,
      currCard: data[0],
      score: 0,
      cardFlipped: false,
      reviewCards: [],
      open: false,
    };
    this.nextCard = this.nextCard.bind(this);
    this.cardFlipped = this.cardFlipped.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.reviewLater = this.reviewLater.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  initialState() {
    this.setState({
      allCards: data,
      cardNumber: 0,
      currCard: data[0],
      score: 0,
      cardFlipped: false,
      reviewCards: [],
      open: false,
    });
  }

  nextCard() {
    let nextCardNumber = this.state.cardNumber + 1;
    // End of the current deck
    if (this.state.allCards[nextCardNumber] === undefined) {
      if (this.state.reviewCards.length !== 0) {
        // Set the all cards deck to the review cards
        this.setState({
          allCards: this.state.reviewCards,
          reviewCards: [],
        });
      } else {
        // Open dialog when all questions are correctly answered
        this.setState({open: true});
        return;
      }
      nextCardNumber = 0;
    }
    this.setState({
      cardNumber: nextCardNumber,
      currCard: this.state.allCards[nextCardNumber],
    });
    this.cardFlipped();
  };

  reviewLater() {
    this.state.reviewCards.push(this.state.currCard);
    this.nextCard();
  };

  cardFlipped () {
    let currState = this.state.cardFlipped;
    this.setState({cardFlipped: !currState});
  };

  addPoint () {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
    this.nextCard();
  };

  handleClose() {
    // Closing dialog resets the cards back to initial state
    this.initialState();
  };

  render () {
    const actions = [
      <FlatButton
        label="Restart Cards"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div>
        <Dialog
          title="Congrats!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.initialState}
        >
          You got all the questions correct!
        </Dialog>
        <Card style={cardContainer}>
          <Score score={this.state.score} total={possibleScore}/>
          <CardTitle title={this.state.currCard.question}/>
          { this.state.cardFlipped ?
            // add answer prop to pass down to answer side
            <AnswerSide
              answer={this.state.currCard.answer}
              sourceTitle={this.state.currCard.sourcetitle}
              sourceUrl={this.state.currCard.sourceurl}
              correct={this.addPoint}
              incorrect={this.reviewLater}
            />
            :
            <ShowAnswerButton
              flip={this.cardFlipped}
            />
          }
        </Card>
      </div>
    )
  }
}

export default FlashCard;
