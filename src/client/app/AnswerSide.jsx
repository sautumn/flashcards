import React from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { CardText, CardActions } from 'material-ui/Card';
// Inline styles
import { cardActions } from './styles/styles';

const sampleAnswer = 'Answer Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.';

class AnswerSide extends React.Component {
  render() {
    return (
      <div>
        <CardText>
          {this.props.question}
        </CardText>
        <CardActions style={cardActions}>
          <RaisedButton
            label='Review later'
            onClick={console.log('Review later')}/>
            {
              //TODO: add functionality to save card for later
            }
          <RaisedButton
            label='Got it!'
            onClick={this.props.correct.bind(this)}/>
        </CardActions>
      </div>
    );
  }
}

export default AnswerSide;
