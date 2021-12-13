import React from 'react';

class FormAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    let handleChange = this.props.handleChange;
    return (
      <div className="form-container">
        <input
          name="name"
          value={info.aboutInfo.name}
          onChange={handleChange}
        ></input>
        <input
          name="title"
          value={info.aboutInfo.title}
          onChange={handleChange}
        ></input>
        <input
          name="phone"
          value={info.aboutInfo.contact.phone}
          onChange={handleChange}
        ></input>
        <input
          name="email"
          value={info.aboutInfo.contact.email}
          onChange={handleChange}
        ></input>

        <input
          name="location"
          value={info.aboutInfo.contact.location}
          onChange={handleChange}
        ></input>
      </div>
    );
  }
}

export default FormAbout;
