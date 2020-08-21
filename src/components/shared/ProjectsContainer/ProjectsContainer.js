import React from 'react';
import Project from '../Project/Project';

import projectsData from '../../../helpers/data/projectData';

import './ProjectsContainer.scss';

class ProjectsContainer extends React.Component {
  state = {
    projects: [],
  }

  getProjects = () => {
    projectsData.getProjects()
      .then((results) => this.setState({ projects: results }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
      <div className="ProjectsContainer">
        <h2>Projects Container</h2>
        <Project />
      </div>
    );
  }
}

export default ProjectsContainer;
