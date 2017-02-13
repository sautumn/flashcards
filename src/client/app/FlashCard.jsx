import React        from 'react';
// Styles
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {score: 0};
    this.addPoint = this.addPoint.bind(this);
  }

  addPoint () {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }


  render() {
    return (
      <div>
        <Card>
          <CardHeader title={'Some title here'}/>
            <CardText>Score:{this.state.score}</CardText>
            <CardActions>
              {
                // TODO: add click to save card for later
              }
              <RaisedButton label='Review later'/>
              <RaisedButton onClick={this.addPoint} label='Got it!'/>
            </CardActions>
        </Card>
      </div>
    )
  }
}

export default FlashCard;
