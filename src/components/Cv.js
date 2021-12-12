import React from 'react';
import About from './cv/About';
import Education from './cv/Education';
import Experience from './cv/Experience';

class Cv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
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
    const name = target.name;
    const value = target.value;

    this.setState(
      (prevState) => {
        if (prevState.aboutInfo.hasOwnProperty(name)) {
          return {
            aboutInfo: {
              ...prevState.aboutInfo,
              [name]: value,
            },
          };
        } else if (prevState.aboutInfo.contact.hasOwnProperty(name)) {
          return {
            aboutInfo: {
              ...prevState.aboutInfo,
              contact: {
                ...prevState.aboutInfo.contact,
                [name]: value,
              },
            },
          };
        }
      },
      () => {
        console.log(this.state.aboutInfo);
      }
    );
  }

  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}

export default Cv;
