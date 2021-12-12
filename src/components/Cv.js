import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';

class Cv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      aboutInfo: {
        name: '',
        title: '',
        contact: {
          phone: '',
          email: '',
          location: '',
        },
      },
      educationInfo: [],
      experienceInfo: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <About
          info={this.state.aboutInfo}
          handleChange={this.handleInputChange}
        />
        <Education
          info={this.state.educationInfo}
          handleChange={this.handleInputChange}
        />
        <Experience
          info={this.state.experienceInfo}
          handleChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Cv;
