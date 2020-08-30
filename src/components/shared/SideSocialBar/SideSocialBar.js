import React from 'react';

import './SideSocialBar.scss';

class SideSocialBar extends React.Component {
  render() {
    return (
      <div className="SideSocialBar">
        <ul>
          <li>
            <a href="mailto: crysland@gmail.com" className="email socialLink"><i class="fas fa-paper-plane"></i>  Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/crystal-broach" className="linkedin socialLink"><i class="fab fa-linkedin"></i>  LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/broach44" className="gitHub socialLink"><i class="fab fa-github-square"></i>  Github</a>
          </li>
          <li>
            <a href="https://twitter.com/crystal_1344?lang=en" className="twitter socialLink"><i class="fab fa-twitter-square"></i>  Twitter</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideSocialBar;
