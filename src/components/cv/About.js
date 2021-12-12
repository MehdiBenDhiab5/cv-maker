import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    return (
      <div>
        <div>{info.name}</div>
        <div>{info.title}</div>
        <div>{info.contact.phone}</div>
        <div>{info.contact.email}</div>
        <div>{info.contact.location}</div>
      </div>
    );
  }
}

export default About;
