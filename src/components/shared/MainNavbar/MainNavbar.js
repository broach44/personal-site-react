import React from 'react';

import './MainNavbar.scss';

class MainNavbar extends React.Component {
  render() {
    return (
      <div className="MainNavbar">
        <div className="navLink">Projects</div>
        <div className="navLink">Technologies</div>
        <div className="navLink">Resume</div>
      </div>
    );
  }
}

export default MainNavbar;
