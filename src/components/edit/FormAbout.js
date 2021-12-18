import React from 'react';

function FormAbout(props) {
  let info = props.info;
  let handleChange = props.handleChange;
  return (
    <div className="form-container">
      <h3>Profile picture</h3>
      <input type="file" name="myImage" onChange={props.onImageChange} />
      <input
        name="name"
        value={info.aboutInfo.name}
        onChange={handleChange}
        placeholder="Name"
      ></input>
      <input
        name="title"
        value={info.aboutInfo.title}
        onChange={handleChange}
        placeholder="Title"
      ></input>
      <input
        name="phone"
        value={info.aboutInfo.contact.phone}
        onChange={handleChange}
        placeholder="Phone number"
      ></input>
      <input
        name="email"
        value={info.aboutInfo.contact.email}
        onChange={handleChange}
        placeholder="Email"
      ></input>
      <input
        name="location"
        value={info.aboutInfo.contact.location}
        onChange={handleChange}
        placeholder="Location"
      ></input>
    </div>
  );
}

// class FormAbout extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let info = this.props.info;
//     let handleChange = this.props.handleChange;
//     return (
//       <div className="form-container">
//         <h3>Profile picture</h3>
//         <input type="file" name="myImage" onChange={this.props.onImageChange} />
//         <input
//           name="name"
//           value={info.aboutInfo.name}
//           onChange={handleChange}
//           placeholder="Name"
//         ></input>
//         <input
//           name="title"
//           value={info.aboutInfo.title}
//           onChange={handleChange}
//           placeholder="Title"
//         ></input>
//         <input
//           name="phone"
//           value={info.aboutInfo.contact.phone}
//           onChange={handleChange}
//           placeholder="Phone number"
//         ></input>
//         <input
//           name="email"
//           value={info.aboutInfo.contact.email}
//           onChange={handleChange}
//           placeholder="Email"
//         ></input>
//         <input
//           name="location"
//           value={info.aboutInfo.contact.location}
//           onChange={handleChange}
//           placeholder="Location"
//         ></input>
//       </div>
//     );
//   }
// }

export default FormAbout;
