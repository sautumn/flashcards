import React from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { CardText, CardActions } from 'material-ui/Card';
// Inline styles
import { cardActions, link, centerText } from './styles/styles';

class AnswerSide extends React.Component {
  render() {
    return (
      <div>
        <CardText style={centerText} dangerouslySetInnerHTML={{__html: this.props.answer}}>
        </CardText>
        <CardText>
          <a href={this.props.sourceUrl} target='_blank'>{this.props.sourceTitle}</a>
        </CardText>
        <CardActions style={cardActions}>
          <RaisedButton
            secondary
            label='Review later'
            onClick={this.props.incorrect.bind(this)}/>
          <RaisedButton
            primary
            label='Got it!'
            onClick={this.props.correct.bind(this)}/>
        </CardActions>
      </div>
    );
  }
}

export default AnswerSide;
