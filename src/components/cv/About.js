import React from 'react';
import DisplayAbout from './about/displayAbout';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    console.log(info);

    return (
      <div>
        <DisplayAbout info={info} />
        {/* <formAbout /> */}
      </div>
    );
  }
}

export default About;
