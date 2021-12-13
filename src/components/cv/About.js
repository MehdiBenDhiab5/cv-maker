import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    return (
      <div className="about-container">
        <div className="name-title-container">
          <div className="contact-name">{info.name}</div>
          <div className="contact-title">{info.title}</div>
        </div>
        <div className="contact-container">
          <div className="contact-info">{info.contact.phone}</div>
          <div className="contact-info">{info.contact.email}</div>
          <div className="contact-info">{info.contact.location}</div>
        </div>
      </div>
    );
  }
}

export default About;