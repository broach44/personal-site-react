import React from 'react';
import MainNavbar from '../components/shared/MainNavbar/MainNavbar';
import JumboTron from '../components/shared/JumboTron/JumboTron';
import ProjectsContainer from '../components/shared/ProjectsContainer/ProjectsContainer';
import SideSocialBar from '../components/shared/SideSocialBar/SideSocialBar';
import TechnologiesContainer from '../components/shared/TechnologiesContainer/TechnologiesContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <SideSocialBar />
      <JumboTron />
      <ProjectsContainer />
      <TechnologiesContainer />
    </div>
  );
}

export default App;
