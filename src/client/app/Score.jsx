import React from 'react';
import { score } from './styles/styles';

class Score extends React.Component {
  render () {
    return (
      <div style={score}>
        <h>Score: {this.props.score} / {this.props.total}</h>
      </div>
    )
  }
}

export default Score;
