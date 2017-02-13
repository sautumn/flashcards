import React from 'react';
import {render} from 'react-dom';
import { main } from './styles/styles';

import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <AwesomeComponent/>
        <p style={main}> Hello React!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
