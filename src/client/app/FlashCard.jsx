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

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      cardFlipped: false,
    };
    this.cardFlipped = this.cardFlipped.bind(this);
    this.addPoint = this.addPoint.bind(this);
  }

  cardFlipped () {
    let currState = this.state.cardFlipped;
    this.setState({cardFlipped: !currState});
  }

  addPoint () {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }

  render () {
    return (
      <div>
        <Card style={cardContainer}>
          <Score score={this.state.score}/>
          <CardTitle title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?'}/>
          { this.state.cardFlipped ?
            // add answer prop to pass down to answer side
            <AnswerSide correct={this.addPoint.bind(this)} incorrect={console.log('you suck')} /> : <ShowAnswerButton flip={this.cardFlipped.bind(this)}/>
          }
        </Card>
      </div>
    )
  }
}

export default FlashCard;
