import React from 'react';
import About from './cv/About';
import Education from './cv/Education';
import Experience from './cv/Experience';

class Cv extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    return (
      <div>
        <About info={info.aboutInfo} />
        <Education info={info.educationInfo} />
        <Experience info={info.experienceInfo} />
      </div>
    );
  }
}

export default Cv;
