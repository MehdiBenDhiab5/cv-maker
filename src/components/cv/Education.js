import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = this.props.info;
    console.log(info);
    return (
      <div>
        <h2>Education:</h2>
        {info.map((x) => {
          return (
            <div key={x.id}>
              <a>{x.title}; </a>
              <a>{x.university}; </a>
              <a>{x.date} </a>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
