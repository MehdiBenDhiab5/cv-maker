import React from 'react';

class FormEducation extends React.Component {
  constructor(props) {
    super(props);

    this.callOnChangeWithKey = this.callOnChangeWithKey.bind(this);
  }

  callOnChangeWithKey(e) {
    this.props.handleChange(this.props.edu.id, e.target.name, e.target.value);
  }

  render() {
    let edu = this.props.edu;
    let handleChange = this.props.handleChange;
    return (
      <div className="form-container">
        <input
          name="title"
          value={edu.title}
          onChange={this.callOnChangeWithKey}
        ></input>

        <input
          name="university"
          value={edu.university}
          onChange={this.callOnChangeWithKey}
        ></input>

        <input
          name="date"
          value={edu.date}
          onChange={this.callOnChangeWithKey}
        ></input>
      </div>
    );
  }
}

export default FormEducation;
