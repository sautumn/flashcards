import React    from 'react';
import {render} from 'react-dom';
// Material-UI Styles
import darkBaseTheme    from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
// Inline CSS Styles
import { title, myTheme }   from './styles/styles';
// Prevent error dialogs for onClick
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Components
import FlashCard        from './FlashCard.jsx';
import Categories        from './Categories.jsx';
// import About            from './About.jsx';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Main extends React.Component {
  componentDidMount () {
    // document.body.style.backgroundColor = '#f3f3f3';
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>

            <Categories/>
            <div style={title}>Front End Flashcards</div>
            <FlashCard/>
        </div>
      </MuiThemeProvider>
    );
  }
}
render(<Main/>, document.getElementById('app'));

export default Main;
