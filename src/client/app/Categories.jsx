import React from 'react';
// Material-UI Styles
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleLeftNav = this.toggleLeftNav.bind(this);
  };

  toggleLeftNav() {
    let value = this.state.open;
    console.log(this.state.open)
    this.setState({
      open: !value
    })
  };

  render() {
    return (
      <div>
        <AppBar
          title="Front End Flash Cards"
          onTouchTap={this.toggleLeftNav}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          // onRequestChange={this.toggleLeftNav}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>

      </div>
    );
  }

}

export default Categories;
