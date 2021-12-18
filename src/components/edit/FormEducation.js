import React from 'react';

function FormEducation(props) {
  function callOnChangeWithKey(e) {
    props.handleChange(props.edu.id, e.target.name, e.target.value);
  }
  function callDeleteWithKey() {
    props.removeEdu(props.edu.id);
  }

  let edu = props.edu;
  let handleChange = props.handleChange;
  return (
    <div className="form-container">
      <div className="remove-container">
        <input
          name="title"
          value={edu.title}
          onChange={callOnChangeWithKey}
          placeholder="Degree"
          className="title-nearRemove"
        ></input>
        <button onClick={callDeleteWithKey}>Remove</button>
      </div>
      <input
        name="university"
        value={edu.university}
        onChange={callOnChangeWithKey}
        placeholder="University"
      ></input>

      <input
        name="date"
        value={edu.date}
        onChange={callOnChangeWithKey}
        placeholder="Date"
      ></input>
    </div>
  );
}

// class FormEducation extends React.Component {
//   constructor(props) {
//     super(props);

//     this.callOnChangeWithKey = this.callOnChangeWithKey.bind(this);
//     this.callDeleteWithKey = this.callDeleteWithKey.bind(this);
//   }

//   callOnChangeWithKey(e) {
//     this.props.handleChange(this.props.edu.id, e.target.name, e.target.value);
//   }
//   callDeleteWithKey() {
//     this.props.removeEdu(this.props.edu.id);
//   }

//   render() {
//     let edu = this.props.edu;
//     let handleChange = this.props.handleChange;
//     return (
//       <div className="form-container">
//         <div className="remove-container">
//           <input
//             name="title"
//             value={edu.title}
//             onChange={this.callOnChangeWithKey}
//             placeholder="Degree"
//             className="title-nearRemove"
//           ></input>
//           <button onClick={this.callDeleteWithKey}>Remove</button>
//         </div>
//         <input
//           name="university"
//           value={edu.university}
//           onChange={this.callOnChangeWithKey}
//           placeholder="University"
//         ></input>

//         <input
//           name="date"
//           value={edu.date}
//           onChange={this.callOnChangeWithKey}
//           placeholder="Date"
//         ></input>
//       </div>
//     );
//   }
// }

export default FormEducation;
