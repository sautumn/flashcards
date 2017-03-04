import React    from 'react';
import {render} from 'react-dom';
// Material-UI Styles
import darkBaseTheme    from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import SelectField      from 'material-ui/SelectField';
import MenuItem         from 'material-ui/MenuItem';
// Inline CSS Styles
import { title, myTheme }   from './styles/styles';
// Prevent error dialogs for onClick
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Components
import FlashCard  from './FlashCard.jsx';
import Categories from './Categories.jsx';
import About  from './About.jsx';



// Data
import data from '../../../data.js';

//http call here to get data from endpoint

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsArray: data,
    }
    this.sortByCategory = this.sortByCategory.bind(this);
  };

  //sort the data based on whats clicked and passed back up
  //then pass it back down to the flashcard so it can go through the lists
  sortByCategory(category) {
    console.log('index category recieved', category);
    let sortedData = data.filter((item) => {
      return item.tag === category;
    });
    // update the questions array to the new one
    this.setState({
      questionsArray: sortedData,
    });
  };

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Categories category={this.sortByCategory}/>
          <br/>
          <FlashCard data={this.state.questionsArray}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
render(<Main/>, document.getElementById('app'));

export default Main;
