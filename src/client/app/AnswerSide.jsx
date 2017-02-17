import React from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { CardText, CardActions } from 'material-ui/Card';
// Inline styles
import { cardActions } from './styles/styles';

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
            onClick={this.props.incorrect.bind(this)}/>
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
