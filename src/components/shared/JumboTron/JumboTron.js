import React from 'react';

import './JumboTron.scss';

class JumboTron extends React.Component {
  render() {
    return (
      <div className="JumboTron">
        <img className="HeadshotImage" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1qJdeCIlM16fF4u5WitTvcOCAz92s7VLizQ&usqp=CAU'} alt="My Headshot"/>
        <p className="QuickInfo">Hello, my name is <span className="BigItem">Crystal Broach</span>.  I am a <span className="BigItem">full-stack web developer</span>.</p>
      </div>
    );
  }
}

export default JumboTron;
