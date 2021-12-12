import React from 'react';

class FormAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    let handleChange = this.props.handleChange;
    return (
      <div>
        <label>
          Name
          <input name="name" value={info.name} onChange={handleChange}></input>
        </label>
        <label>
          Title
          <input
            name="title"
            value={info.title}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Phone
          <input
            name="phone"
            value={info.contact.phone}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Email
          <input
            name="email"
            value={info.contact.email}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Location
          <input
            name="location"
            value={info.contact.location}
            onChange={handleChange}
          ></input>
        </label>
      </div>
    );
  }
}

export default FormAbout;
