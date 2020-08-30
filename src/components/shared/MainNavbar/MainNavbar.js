import React from 'react';

import resume from '../../../helpers/assets/CrystalBroach_Resume.pdf';

import './MainNavbar.scss';

class MainNavbar extends React.Component {
  render() {
    return (
      <div className="MainNavbar">
        <div className="navLink"><a href="#projectsSection">Projects</a></div>
        <div className="navLink"><a href="#technologiesSection">Technologies</a></div>
        <div className="navLink"><a href={resume} target="_blank">Resume</a></div>
      </div>
    );
  }
}

export default MainNavbar;
