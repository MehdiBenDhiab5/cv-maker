import React from 'react';

class FormExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    let handleChange = this.props.handleChange;
    return (
      <div>
        <h1>Experience Form</h1>
      </div>
    );
  }
}

export default FormExperience;
