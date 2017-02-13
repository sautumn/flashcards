import React from 'react';
import {render} from 'react-dom';
// Styles
import { main } from './styles/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Prevent error dialogs for onClick
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Components
import FlashCard from './FlashCard.jsx';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <div style={main}>
            <FlashCard/>
            {/* <AwesomeComponent/> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
