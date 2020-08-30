import React from 'react';
import Project from '../Project/Project';

import projectsData from '../../../helpers/data/projectData';

import dividerImage from '../../../helpers/assets/teal simple dividing line_1894052.png';

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
    const { projects } = this.state;
    return (
      <div className="ProjectsContainer">
        <div className="dividerImage"></div>
        <h1>Projects</h1>
        { projects.map((project) => <Project project={project} />)}
      </div>
    );
  }
}

export default ProjectsContainer;
