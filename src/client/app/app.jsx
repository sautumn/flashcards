import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

// Components
import Main from './index.jsx';
import FlashCard from './FlashCard.jsx';

// -- Import components
// import App from '';

class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
      <Route path='/' component={Main} />
      <Route path='/index' component={Main} />
      </Router>,
      document.getElementById('app'),
    );
  }

};
// const NotFound = () => (
//   <h1>404.. This page is not found!</h1>);
// const test = () => (
//   <h1>404.. This page is not found!</h1>);
export default App;
