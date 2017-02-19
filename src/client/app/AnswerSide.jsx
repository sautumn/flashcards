import React from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { CardText, CardActions } from 'material-ui/Card';
// Inline styles
import { cardActions, link } from './styles/styles';

class AnswerSide extends React.Component {
  render() {
    return (
      <div>
        <CardText>
          {this.props.question}
        </CardText>
        <CardText>
          <a href={this.props.sourceUrl} style={link} target='_blank'>{this.props.sourceTitle}</a>
        </CardText>
        <CardActions style={cardActions}>
          <RaisedButton
            label='Review later'
            onClick={this.props.incorrect.bind(this)}/>
          <RaisedButton
            label='Got it!'
            onClick={this.props.correct.bind(this)}/>
        </CardActions>
      </div>
    );
  }
}

export default AnswerSide;
