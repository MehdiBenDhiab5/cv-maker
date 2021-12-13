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
    return (
      <div>
        <FormAbout info={info} handleChange={handleChange} />

        {info.educationInfo.map((elem) => {
          return (
            <FormEducation key={elem.id} edu={elem} handleChange={modifyEdu} />
          );
        })}

        {info.experienceInfo.map((elem) => {
          return (
            <FormExperience
              key={elem.id}
              exp={elem}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    );
  }
}

export default Edit;
