import React from 'react';

function FormExperience(props) {
  function callOnChangeWithKey(e) {
    props.handleChange(props.exp.id, e.target.name, e.target.value);
  }
  function callDeleteWithKey() {
    props.removeExp(props.exp.id);
  }

  let exp = props.exp;
  let handleChange = props.handleChange;
  return (
    <div className="form-container">
      <div className="remove-container">
        <input
          name="title"
          value={exp.title}
          onChange={callOnChangeWithKey}
          placeholder="Title"
          className="title-nearRemove"
        ></input>
        <button onClick={callDeleteWithKey}>Remove</button>
      </div>

      <input
        name="company"
        value={exp.company}
        onChange={callOnChangeWithKey}
        placeholder="Company"
      ></input>

      <input
        name="date"
        value={exp.date}
        onChange={callOnChangeWithKey}
        placeholder="Date"
      ></input>

      <textarea
        name="description"
        value={exp.description}
        onChange={callOnChangeWithKey}
        placeholder="Description"
      ></textarea>
    </div>
  );
}

// class FormExperience extends React.Component {
//   constructor(props) {
//     super(props);

//     this.callOnChangeWithKey = this.callOnChangeWithKey.bind(this);
//     this.callDeleteWithKey = this.callDeleteWithKey.bind(this);
//   }

//   callOnChangeWithKey(e) {
//     this.props.handleChange(this.props.exp.id, e.target.name, e.target.value);
//   }
//   callDeleteWithKey() {
//     this.props.removeExp(this.props.exp.id);
//   }

//   render() {
//     let exp = this.props.exp;
//     let handleChange = this.props.handleChange;
//     return (
//       <div className="form-container">
//         <div className="remove-container">
//           <input
//             name="title"
//             value={exp.title}
//             onChange={this.callOnChangeWithKey}
//             placeholder="Title"
//             className="title-nearRemove"
//           ></input>
//           <button onClick={this.callDeleteWithKey}>Remove</button>
//         </div>

//         <input
//           name="company"
//           value={exp.company}
//           onChange={this.callOnChangeWithKey}
//           placeholder="Company"
//         ></input>

//         <input
//           name="date"
//           value={exp.date}
//           onChange={this.callOnChangeWithKey}
//           placeholder="Date"
//         ></input>

//         <textarea
//           name="description"
//           value={exp.description}
//           onChange={this.callOnChangeWithKey}
//           placeholder="Description"
//         ></textarea>
//       </div>
//     );
//   }
// }

export default FormExperience;
