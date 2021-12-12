import React from 'react';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    return (
      <div>
        <h2>Experience:</h2>
        {info.map((x) => {
          return (
            <div key={x.id}>
              <a>{x.title}; </a>
              <a>{x.company}; </a>
              <a>{x.date}; </a>
              <a>{x.description}; </a>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experience;
