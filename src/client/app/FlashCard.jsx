import React        from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
// Inline CSS Styles
import { main, cardContainer } from './styles/styles';

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {score: 0};
    this.addPoint = this.addPoint.bind(this);
  }

  coponentDidMount () {
    console.log('hey')
    document.body.style.backgroundColor = "green";
  }

  addPoint () {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }

  render() {
    return (
      <div>
        <Card style={cardContainer}>
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
