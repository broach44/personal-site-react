import React from 'react';
import Headshot from '../../../helpers/assets/Web-photo-temp-CrystalBroach.jpg';

import './JumboTron.scss';

class JumboTron extends React.Component {
  render() {
    return (
      <div className="JumboTron">
        <a href="https://soundcloud.com/nashville-software-school/crystal-broach?in=nashville-software-school/sets/evening-10-demo-day">
          <img className="HeadshotImage" src={Headshot} alt="My Headshot"/>
        </a>
        <p className="QuickInfo">Hello, my name is <span className="BigItem">Crystal Broach</span>.  I am a <span className="BigItem">full-stack web developer</span>.</p>
      </div>
    );
  }
}

export default JumboTron;
