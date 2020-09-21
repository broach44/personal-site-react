import React from 'react';
import Project from '../Project/Project';
import FeaturedProjectsCarousel from '../FeaturedProjectCarousel/FeaturedProjectCarousel';

import projectsData from '../../../helpers/data/projectData';

import './ProjectsContainer.scss';

class ProjectsContainer extends React.Component {
  state = {
    projects: [],
  }

  getProjects = () => {
    projectsData.getProjects()
      .then((results) => {
        const nonFeaturedProjects = results.filter((project) => project.isFeatured === false);
        this.setState({ projects: nonFeaturedProjects });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    const { projects } = this.state;
    return (
      <div id="projectsSection" className="ProjectsContainer">
        <div className="dividerImage"></div>
        <h1>Featured Projects</h1>
        <FeaturedProjectsCarousel />
        <h1>Additional Projects</h1>
        { projects.map((project) => <Project project={project} />)}
      </div>
    );
  }
}

export default ProjectsContainer;
