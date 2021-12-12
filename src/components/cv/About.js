import React from 'react';
import DisplayAbout from './about/displayAbout';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    let edit = this.props.edit;

    console.log(info);

    return <div>{edit ? '<formAbout />' : <DisplayAbout info={info} />}</div>;
  }
}

export default About;
