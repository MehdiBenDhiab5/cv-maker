import React from 'react';
import FormAbout from './edit/FormAbout';
import FormEducation from './edit/FormEducation';
import FormExperience from './edit/FormExperience';

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    let handleChange = this.props.handleChange;
    let modifyEdu = this.props.modifyEdu;
    let modifyExp = this.props.modifyExp;
    return (
      <div className="page">
        <h2>About</h2>
        <FormAbout info={info} handleChange={handleChange} />

        <h2>Education</h2>
        {info.educationInfo.map((elem) => {
          return (
            <FormEducation key={elem.id} edu={elem} handleChange={modifyEdu} />
          );
        })}

        <h2>Experience</h2>
        {info.experienceInfo.map((elem) => {
          return (
            <FormExperience key={elem.id} exp={elem} handleChange={modifyExp} />
          );
        })}
      </div>
    );
  }
}

export default Edit;
