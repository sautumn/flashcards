import React    from 'react';
import {render} from 'react-dom';
// Material-UI Styles
// import darkBaseTheme    from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
// Inline CSS Styles
import { title, myTheme }   from './styles/styles';
// Prevent error dialogs for onClick
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Components
import FlashCard        from './FlashCard.jsx';
// import About            from './About.jsx';

class App extends React.Component {
  componentDidMount () {
    document.body.style.backgroundColor = '#f1c40f';
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <div>
            <div style={title}>Front End Flashcards</div>
            <FlashCard/>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
