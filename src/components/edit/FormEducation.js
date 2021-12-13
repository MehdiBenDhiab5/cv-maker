import React from 'react';

class FormEducation extends React.Component {
  constructor(props) {
    super(props);

    this.callOnChangeWithKey = this.callOnChangeWithKey.bind(this);
    this.callDeleteWithKey = this.callDeleteWithKey.bind(this);
  }

  callOnChangeWithKey(e) {
    this.props.handleChange(this.props.edu.id, e.target.name, e.target.value);
  }
  callDeleteWithKey() {
    this.props.removeEdu(this.props.edu.id);
  }

  render() {
    let edu = this.props.edu;
    let handleChange = this.props.handleChange;
    return (
      <div className="form-container">
        <div className="remove-container">
          <input
            name="title"
            value={edu.title}
            onChange={this.callOnChangeWithKey}
            placeholder="Degree"
            className="title-nearRemove"
          ></input>
          <button onClick={this.callDeleteWithKey}>Remove</button>
        </div>
        <input
          name="university"
          value={edu.university}
          onChange={this.callOnChangeWithKey}
          placeholder="University"
        ></input>

        <input
          name="date"
          value={edu.date}
          onChange={this.callOnChangeWithKey}
          placeholder="Date"
        ></input>
      </div>
    );
  }
}

export default FormEducation;
