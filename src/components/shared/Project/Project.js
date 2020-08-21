import React from 'react';

import './Project.scss';

class Project extends React.Component {
  render() {
    return (
      <div className="Project">
        <div>
          <img src="https://image.freepik.com/free-photo/computer_1205-717.jpg?1" alt="" />
        </div>
        <div className="ProjectInfo">
          <h4>Title of Project</h4>
          <p>Tech Used</p>
          <p>Include a brief description of the project</p>
          <div>More Info Button</div>
        </div>
      </div>
    );
  }
}

export default Project;
