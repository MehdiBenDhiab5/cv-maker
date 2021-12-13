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
    let addExp = this.props.addExp;
    let addEdu = this.props.addEdu;
    return (
      <div className="page">
        <h2>About</h2>
        <FormAbout info={info} handleChange={handleChange} />

        <div className="form-title-container">
          <h2>Education</h2>
          <button onClick={addEdu}>Add</button>
        </div>
        {info.educationInfo.map((elem) => {
          return (
            <FormEducation
              key={elem.id}
              edu={elem}
              handleChange={modifyEdu}
              removeEdu={this.props.removeEdu}
            />
          );
        })}

        <div className="form-title-container">
          <h2>Experience</h2>
          <button onClick={addExp}>Add</button>
        </div>

        {info.experienceInfo.map((elem) => {
          return (
            <FormExperience
              key={elem.id}
              exp={elem}
              handleChange={modifyExp}
              removeExp={this.props.removeExp}
            />
          );
        })}
      </div>
    );
  }
}

export default Edit;
