import React from 'react';

function About(props) {
  let info = props.info;
  return (
    <div className="about-container">
      {props.profileImage ? (
        <img
          src={props.profileImage}
          alt="profile_picture"
          className="profile-image"
        />
      ) : null}
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

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let info = this.props.info;
//     return (
//       <div className="about-container">
//         {this.props.profileImage ? (
//           <img
//             src={this.props.profileImage}
//             alt="profile_picture"
//             className="profile-image"
//           />
//         ) : null}
//         <div className="name-title-container">
//           <div className="contact-name">{info.name}</div>
//           <div className="contact-title">{info.title}</div>
//         </div>
//         <div className="contact-container">
//           <div className="contact-info">{info.contact.phone}</div>
//           <div className="contact-info">{info.contact.email}</div>
//           <div className="contact-info">{info.contact.location}</div>
//         </div>
//       </div>
//     );
//   }
// }

export default About;
