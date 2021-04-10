import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('navbar');
    return (
      <nav className="navbar">
        <span>Habit Tracker</span>
        <i className="navbar-logo fas fa-running"></i>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
