import React from 'react';
// Material-UI Styles
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
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
    this.sendUpCategory = this.sendUpCategory.bind(this);
  };

  toggleLeftNav() {
    let value = this.state.open;
    this.setState({
      open: !value,
    })
  };

  sendUpCategory(category) {
    console.log('hey you click ', category);
  }

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
          onRequestChange={this.toggleLeftNav}
        >
          <Subheader>By Category</Subheader>
          <MenuItem onClick={(e) => (this.props.category('General'))}>General Front End</MenuItem>
          <MenuItem onClick={(e) => (this.props.category('HTML'))}>HTML</MenuItem>
          <MenuItem onClick={(e) => (this.props.category('CSS'))}>CSS</MenuItem>
          <MenuItem onClick={(e) => (this.props.category('Frameworks'))}>General Frameworks</MenuItem>
          <MenuItem onClick={(e) => (this.props.category('React'))}>React</MenuItem>
          <MenuItem onClick={(e) => (this.props.category('Angular'))}>Angular</MenuItem>
          <MenuItem onClick={(e) => (this.props.category('Time'))}>Time Complexity</MenuItem>
        </Drawer>

      </div>
    );
  }

}

export default Categories;
