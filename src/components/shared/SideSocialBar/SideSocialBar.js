import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { facebook } from '@fortawesome/free-solid-svg-icons';

import './SideSocialBar.scss';

class SideSocialBar extends React.Component {
  render() {
    return (
      <div className="SideSocialBar">
        <h4>Contact Info:</h4>
        <ul>
          <li>
            <a href="mailto: crysland@gmail.com" className="email socialLink">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/crystal-broach" className="linkedin socialLink">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/broach44" className="gitHub socialLink">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/crystal_1344?lang=en" className="twitter socialLink">Twitter</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideSocialBar;
