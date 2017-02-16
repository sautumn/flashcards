import React        from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
// Inline CSS Styles
import { main, cardContainer, cardAnswer, cardActions } from './styles/styles';

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

// { this.state.cardFlipped ?
//   <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
//   : <RaisedButton style={cardAnswer} onClick={this.cardFlipped} label='Flip card'/>
// }

// {/* <CardActions style={cardActions}>
//   <RaisedButton label='Review later'/>
//   <RaisedButton onClick={this.addPoint} label='Got it!'/>
// </CardActions> */}

export default FlashCard;
