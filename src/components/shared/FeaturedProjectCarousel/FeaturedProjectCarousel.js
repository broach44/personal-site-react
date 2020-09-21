import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Project from '../Project/Project';

import projectsData from '../../../helpers/data/projectData';

import './FeaturedProjectCarousel.scss';

export default class Example extends React.Component {
  state = {
    projects: [],
  }

  getFeaturedProjects = () => {
    projectsData.getProjects()
      .then((dataResult) => {
        const featuredProjects = dataResult.filter((project) => project.isFeatured === true);
        this.setState({ projects: featuredProjects });
      })
      .catch((err) => console.error('err in get Featured Projects', err));
  }

  componentDidMount() {
    this.getFeaturedProjects();
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="FeaturedProjectCarouselContainer">
          <Carousel>
              {
                  projects.map((project) => <Project key={project.id} project={project} />)
              }
          </Carousel>
      </div>
    );
  }
}
