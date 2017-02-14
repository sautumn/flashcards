import React        from 'react';
// Material-UI Styles
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
// Inline CSS Styles
import { main, cardContainer, cardActions } from './styles/styles';

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

  render () {
    return (
      <div>
        <Card style={cardContainer}>
          {
            // TODO: change to text because of weird styling with material-ui
          }
          <CardHeader title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?'}/>
           <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
            <CardActions style={cardActions}>
              {
                // TODO: add click to save card for later
              }
              <RaisedButton label='Review later'/>
              <RaisedButton onClick={this.addPoint} label='Got it!'/>
            </CardActions>
        </Card>
        {
        // TODO: pass down props or use redux
        }
        <h>Score:{this.state.score}</h>
      </div>
    )
  }
}

export default FlashCard;
