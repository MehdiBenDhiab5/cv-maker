import React from 'react';
import Cv from './components/Cv';
import Edit from './components/Edit';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <Edit info={this.state} handleChange={this.handleInputChange} />
        <Cv info={this.state} />
      </div>
    );
  }
}

export default App;
