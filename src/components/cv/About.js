import React from 'react';
import DisplayAbout from './about/displayAbout';
import FormAbout from './about/FormAbout';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    let handleChange = this.props.handleChange;
    let edit = this.props.edit;
    return (
      <div>
        {edit ? (
          <FormAbout info={info} handleChange={handleChange} />
        ) : (
          <DisplayAbout info={info} />
        )}
      </div>
    );
  }
}

export default About;
