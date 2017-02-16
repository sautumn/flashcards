import React from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';
// Inline styles
import { cardActions } from './styles/styles';

class ShowAnswerButton extends React.Component {
  render() {
    return (
      <div>
        <CardActions style={cardActions}>
          {
            // Update true/false here with props from parent as fn
          }
          <RaisedButton
            label='Show Answer'
            onClick={this.props.flip.bind(this)}/>
        </CardActions>
      </div>
    );
  }
}

export default ShowAnswerButton;
