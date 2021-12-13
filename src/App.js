import React from 'react';
import Cv from './components/Cv';
import Edit from './components/Edit';
import uniqid from 'uniqid';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutInfo: {
        name: 'el bor3i',
        title: 'b',
        contact: {
          phone: 'c',
          email: 'd',
          location: 'e',
        },
      },
      educationInfo: [
        {
          id: uniqid(),
          title: 'title1',
          university: 'university1',
          date: 'date1',
        },
        {
          id: uniqid(),
          title: 'title2',
          university: 'university2',
          date: 'date2',
        },
      ],
      experienceInfo: [
        {
          id: uniqid(),
          title: 'title1',
          company: 'company1',
          date: 'date1',
          description: 'description1',
        },
        {
          id: uniqid(),
          title: 'title2',
          company: 'company2',
          date: 'date2',
          description: 'description2',
        },
        {
          id: uniqid(),
          title: 'title3',
          company: 'company3',
          date: 'date3',
          description: 'description3',
        },
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.modifyEdu = this.modifyEdu.bind(this);
  }
  //about form
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
  modifyEdu(id, name, value) {
    this.setState((prevState) => {
      //get index of element to change
      let ind = prevState.educationInfo.findIndex((elem) => elem.id == id);
      //create another array to later insert into state
      let newArr = prevState.educationInfo;
      //change the value in the new array
      //need to change title:"ba9lewa" to [name]:value
      newArr[ind] = { ...newArr[ind], [name]: value };
      return { educationInfo: newArr };
    });
  }
  addEdu() {
    this.setState((prevState) => {
      let newEdu = {
        id: uniqid(),
        title: '',
        university: '',
        date: '',
      };
      let newArr = prevState.educationInfo.concat(newEdu);
      return {
        educationInfo: newArr,
      };
    });
  }

  render() {
    return (
      <div className="main-page">
        <div className="buttons">
          <button onClick={this.addEdu}>addEdu</button>
          <button onClick={this.modifyEdu}>modifyEdu</button>
        </div>
        <div className="main-content">
          <Edit
            info={this.state}
            handleChange={this.handleInputChange}
            modifyEdu={this.modifyEdu}
          />
          <Cv info={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
