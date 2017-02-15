import React from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { CardText, CardActions } from 'material-ui/Card';
// Inline styles
import { cardActions } from './styles/styles';

const sampleAnswer = 'Answer Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.';

class QuestionSide extends React.Component {
  render() {
    return (
      <div>
        <CardText>
          {sampleAnswer}
        </CardText>
        <CardActions style={cardActions}>
          <RaisedButton label='Review later' onClick={console.log('Review later')}/>
          {
            //Card point should be updated here with props from parent as fn
          }
          <RaisedButton label='Got it!' onClick={console.log('Got it!')}/>
        </CardActions>
      </div>
    );
  }
}

export default QuestionSide;
