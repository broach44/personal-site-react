import React from 'react';
import PropTypes from 'prop-types';

import './Project.scss';

class Project extends React.Component {
  static props = {
    project: PropTypes.obj,
  }

  renderLiveLink = () => {
    const { project } = this.props;
    if (project.url !== null) {
      return (<a href={project.url}>Click Here to View Demo</a>);
    }
    return <></>;
  }

  render() {
    const { project } = this.props;
    return (
      <div className="Project">
        <div>
          <img className="projectImage" src={project.screenshot} alt="" />
        </div>
        <div className="ProjectInfo">
          <h4>{project.title}</h4>
          <p>Tech Stack: {project.technologiesUsed}</p>
          <p>Description: {project.description}</p>
          <p>
          <a href={project.githubUrl}>Click to View Code</a>
          </p>
          { this.renderLiveLink() }
          {/* <div>More Info Button</div> */}
        </div>
      </div>
    );
  }
}

export default Project;
