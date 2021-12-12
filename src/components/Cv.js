import React from 'react';
import About from './cv/About';
import Education from './cv/Education';
import Experience from './cv/Experience';

class Cv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      aboutInfo: {
        name: 'a',
        title: 'b',
        contact: {
          phone: 'c',
          email: 'd',
          location: 'e',
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
          edit={this.state.editMode}
        />
        <Education
          info={this.state.educationInfo}
          handleChange={this.handleInputChange}
          edit={this.state.editMode}
        />
        <Experience
          info={this.state.experienceInfo}
          handleChange={this.handleInputChange}
          edit={this.state.editMode}
        />
      </div>
    );
  }
}

export default Cv;
