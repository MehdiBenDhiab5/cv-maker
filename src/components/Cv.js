import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';

class Cv extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <About />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default Cv;
