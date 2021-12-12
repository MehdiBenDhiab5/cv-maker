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
    return (
      <div>
        <FormAbout info={info} handleChange={handleChange} />
        <FormEducation info={info} handleChange={handleChange} />
        <FormExperience info={info} handleChange={handleChange} />
      </div>
    );
  }
}

export default Edit;
