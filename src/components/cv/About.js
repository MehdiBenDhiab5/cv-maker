import React from 'react';
import DisplayAbout from './about/displayAbout';
import FormAbout from './about/FormAbout';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    let edit = this.props.edit;

    console.log(info);

    return <div>{edit ? <FormAbout /> : <DisplayAbout info={info} />}</div>;
  }
}

export default About;
