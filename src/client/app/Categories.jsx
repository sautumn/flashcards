import React from 'react';
// Material-UI Styles
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Categories extends React.Component {

  render() {
    return (
      <div>
        <AppBar
          title="Front End Flash Cards"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

      </div>
    );
  }

}

export default Categories;
